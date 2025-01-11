import { prisma } from "@/lib/prisma";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { eventName, leaderId, leaderEmail, leaderName } = await req.json();

    // console.log("Solo registration request:", {
    //   eventName,
    //   leaderId,
    //   leaderEmail,
    //   leaderName,
    // });

    // Send a get request to / route of email service to avoid failure due to cold start
    const response = await axios.get(`${process.env.EMAIL_URL}`);
    console.log("Email service response:", response.data);

    // Input validation
    if (!eventName || !leaderId || !leaderEmail || !leaderName) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the leader is already in a team for this event
    const existingTeam = await prisma.team.findFirst({
      where: {
        eventName,
        OR: [{ leaderId }, { members: { some: { email: leaderEmail } } }],
      },
      include: { members: true },
    });

    if (existingTeam) {
      return NextResponse.json(
        {
          message: "You have already registered for this event.",
        },
        { status: 400 }
      );
    }

    // Create the solo team
    const team = await prisma.team.create({
      data: {
        teamName: leaderEmail,
        eventName,
        leaderId,
        members: {
          connect: [{ id: leaderId }], // No members for solo registration
        },
      },
      include: { members: true },
    });

    // send notification to the user
    const notification = {
      email: leaderEmail,
      title: `Yay! You have registered for "${eventName}"`,
      message: `Yay! You have registered for "${eventName}"`,
      type: "SOLO_REGISTRATION",
    };

    await prisma.notification.create({ data: notification });

    // Send confirmation email to the leader
    await axios.post(`${process.env.EMAIL_URL}/api/event`, {
      to: leaderEmail,
      subject: `Registration Successful for ${eventName}`,
      name: leaderName,
      eventName,
    });

    return NextResponse.json(
      {
        message: "Solo registration successful",
        team,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error during solo registration:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
