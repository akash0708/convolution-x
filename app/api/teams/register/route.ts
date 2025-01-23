import { getFriendlyEventName } from "@/lib/friendlyEventNames";
import { prisma } from "@/lib/prisma"; // Adjust the path as per your project setup
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      teamName,
      eventName,
      leaderId,
      members: teamMembers,
      leaderEmail,
      leaderName,
    } = await req.json();

    const team_events = [
      "sparkhack",
      "decisia",
      "aboltabol",
      "circuistics",
      "eureka",
    ];

    if (!team_events.includes(eventName.toLowerCase())) {
      return NextResponse.json(
        { message: "This event does not support team registration." },
        { status: 400 }
      );
    }

    // send a get request to / route of email service to avoid failure due to cold start
    axios
      .get(`${process.env.EMAIL_URL}`)
      .catch((err) =>
        console.error("Failed to warm up email service:", err.message)
      );

    // Input validation
    if (
      !teamName ||
      !eventName ||
      !leaderId ||
      !leaderEmail ||
      !Array.isArray(teamMembers)
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // check if leaderEmail is same as any of the teamMembers
    if (teamMembers.includes(leaderEmail)) {
      return NextResponse.json(
        {
          message:
            "You cannot be add your name as a member while registering as a Leader",
        },
        { status: 400 }
      );
    }

    // Combine leader and team members for validation
    const allMembers = [...teamMembers, leaderEmail];

    // Check to ensure team size is within the limits
    if (allMembers.length > 6) {
      return NextResponse.json(
        { message: "Team size not supported" },
        { status: 400 }
      );
    }

    // Check if all of the emails are unique
    const uniqueMembers = new Set(allMembers);

    if (uniqueMembers.size !== allMembers.length) {
      return NextResponse.json(
        {
          message:
            "Duplicate emails found in team members or leader. All emails should be unique",
        },
        { status: 400 }
      );
    }

    // Fetch users from the database
    const users = await prisma.user.findMany({
      where: {
        email: { in: allMembers },
      },
    });

    // Map existing emails and check for email verification status
    const existingEmails = users.map((user) => user.email);
    const nonExistingUsers = allMembers.filter(
      (email) => !existingEmails.includes(email)
    );
    const unverifiedUsers = users
      .filter((user) => !user.emailVerified)
      .map((user) => user.email);

    if (nonExistingUsers.length > 0) {
      return NextResponse.json(
        {
          message: `The following users have not signed up on the website: ${nonExistingUsers.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    if (unverifiedUsers.length > 0) {
      return NextResponse.json(
        {
          message: `The following users have not verified their email: ${unverifiedUsers.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Check if the leader or any member is already in a team for this event
    const existingTeams = await prisma.team.findMany({
      where: {
        eventName,
        OR: [
          { leaderId },
          { members: { some: { email: { in: allMembers } } } },
        ],
      },
      include: { members: true },
    });

    if (existingTeams.length > 0) {
      // If leader or any member is already in a team
      const existingTeam = existingTeams[0];
      const isLeaderInTeam = existingTeam.leaderId === leaderId;
      const existingMembers = existingTeam.members.filter((member) =>
        allMembers.includes(member.email)
      );

      return NextResponse.json(
        {
          message: isLeaderInTeam
            ? "You are already part of a team for this event."
            : `One or more members (${existingMembers
                .map((m) => m.email)
                .join(", ")}) are already part of a team for this event.`,
        },
        { status: 400 }
      );
    }

    // Ensure team size doesn't exceed maxSize
    const maxSize = 5;
    if (teamMembers.length + 1 > maxSize) {
      return NextResponse.json(
        { message: `Team size cannot exceed ${maxSize}` },
        { status: 400 }
      );
    }

    // Create the team
    const team = await prisma.team.create({
      data: {
        teamName,
        eventName,
        leaderId,
        members: {
          connect: [
            { id: leaderId }, // Connect leader
            ...teamMembers.map((memberEmail: string) => ({
              email: memberEmail,
            })), // Connect members
          ],
        },
      },
      include: { members: true },
    });

    // Notify team members
    const notifications = teamMembers.map((email: string) => ({
      email,
      message: `You are now part of the team "${teamName}" for the event "${getFriendlyEventName(
        eventName
      )}".`,
      type: "TEAM_INVITE",
    }));

    // Notify leader
    notifications.push({
      email: leaderEmail,
      message: `Yay! Team "${teamName}" has been created successfully for the event "${getFriendlyEventName(
        eventName
      )}".`,
      type: "TEAM_CREATE",
    });

    await Promise.all(
      notifications.map(async (notification) => {
        await prisma.notification.create({
          data: notification,
        });
      })
    );

    // Send email to the leader
    let emailSent = true;
    try {
      await axios.post(`${process.env.EMAIL_URL}/api/event`, {
        to: leaderEmail,
        subject: `${getFriendlyEventName(eventName)}`,
        name: leaderName,
        eventName,
        teamName,
      });
    } catch (emailError: any) {
      console.error("Failed to send email:", emailError.message);
      emailSent = false;
    }

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
    console.error("Error creating team:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
