import { getFriendlyEventName } from "@/lib/friendlyEventNames";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { eventName, leaderId, leaderEmail, leaderName } = await req.json();

    console.log("Solo registration request:", {
      eventName,
      leaderId,
      leaderEmail,
      leaderName,
    });

    const solo_events = ["aboltabol"];

    if (!solo_events.includes(eventName.toLowerCase())) {
      return NextResponse.json(
        { message: "This event does not support solo registration." },
        { status: 400 }
      );
    }

    // Check if user exists and email is verified
    const userExists = await prisma.user.findUnique({
      where: {
        email: leaderEmail,
      },
    });

    if (!userExists || !userExists.emailVerified) {
      const message = !userExists
        ? "Signup on the website and verify your email before registering for an event."
        : "Please verify your email before registering for an event.";
      return NextResponse.json({ message }, { status: 400 });
    }

    // console.log("Solo registration request:", {
    //   eventName,
    //   leaderId,
    //   leaderEmail,
    //   leaderName,
    // });

    // Send a get request to / route of email service to avoid failure due to cold start
    axios
      .get(`${process.env.EMAIL_URL}`)
      .catch((err) =>
        console.error("Failed to warm up email service:", err.message)
      );

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
      message: `Yay! You have registered for "${getFriendlyEventName(
        eventName
      )}"`,
      type: "SOLO_REGISTRATION",
    };

    await prisma.notification.create({ data: notification });

    // Send confirmation email to the leader
    let emailSent = true;
    try {
      await axios.post(`${process.env.EMAIL_URL}/api/event`, {
        to: leaderEmail,
        subject: getFriendlyEventName(eventName),
        name: leaderName,
        eventName,
      });
    } catch (emailError: any) {
      console.log(
        "to:",
        leaderEmail,
        "subject:",
        getFriendlyEventName(eventName),
        "name:",
        leaderName,
        "eventName:",
        eventName
      );
      console.error("Failed to send email:", emailError.message);
      emailSent = false;
    }

    // Construct the response message
    const responseMessage = emailSent
      ? "Solo registration successful."
      : "Solo registration successful. However, we couldn't send a confirmation email. Please contact the organizers for assistance.";

    return NextResponse.json(
      {
        message: responseMessage,
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
