import { prisma } from "@/lib/prisma"; // Adjust the path as per your project setup
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      teamName,
      eventName,
      leaderId,
      members: teamMembers,
    } = await req.json();

    console.log("team", {
      teamName,
      eventName,
      leaderId,
      teamMembers,
    });

    // Input validation
    if (!teamName || !eventName || !leaderId || !Array.isArray(teamMembers)) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    // debug
    console.log("input validated");

    // we will be getting emails of members and not ids, hence first we need to check if user with specified userid exists and then fetch the ids of the members
    // const memberEmails = members.map((member: string) => member.email);
    const existingUsers = await prisma.user.findMany({
      where: { email: { in: teamMembers } },
    });

    // Check if all members exist
    if (existingUsers.length !== teamMembers.length) {
      return NextResponse.json(
        {
          message: "One or more team members are not registered on the website",
        },
        { status: 400 }
      );
    }

    // Check if any member is already in a team for this event
    const existingMembers = await prisma.team.findFirst({
      where: {
        members: {
          some: {
            id: { in: existingUsers.map((u) => u.id) },
          },
        },
        eventName,
      },
    });

    if (existingMembers) {
      return NextResponse.json(
        {
          message: "One or more members are already registered for this event",
        },
        { status: 400 }
      );
    }

    // Check if any member is already a leader for another team for this event
    const existingLeader = await prisma.team.findFirst({
      where: {
        leaderId: { in: existingUsers.map((u) => u.id) },
        eventName,
      },
    });

    if (existingLeader) {
      return NextResponse.json(
        {
          message:
            "One or more members are already a leader for another team in this event",
        },
        { status: 400 }
      );
    }

    // debug
    console.log("members validated");

    // Check if leader exists
    const leader = await prisma.user.findFirst({
      where: { id: leaderId },
    });

    if (!leader) {
      return NextResponse.json(
        { message: "Leader not found" },
        { status: 404 }
      );
    }

    // Check if the leader already has a team for this event
    const existingTeam = await prisma.team.findFirst({
      where: { eventName, leaderId },
    });
    if (existingTeam) {
      return NextResponse.json(
        { message: "Leader already has a team for this event" },
        { status: 400 }
      );
    }

    // Check if leader is a member of any other team for this event
    const existingMember = await prisma.team.findFirst({
      where: {
        members: {
          some: {
            id: leaderId,
          },
        },
        eventName,
      },
    });

    if (existingMember) {
      return NextResponse.json(
        { message: "Leader is already a member of another team" },
        { status: 400 }
      );
    }

    // debug
    console.log("leader validated");

    // Ensure team size doesn't exceed maxSize
    const maxSize = 4;
    if (teamMembers.length + 1 > maxSize) {
      return NextResponse.json(
        { message: `Team size cannot exceed ${maxSize}` },
        { status: 400 }
      );
    }

    // debug
    console.log("team size validated");

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
      include: {
        members: true,
      },
    });

    // debug
    console.log("team created");

    // Add notifications for team members (excluding the leader)
    const notifications = teamMembers.map((memberId: string) => ({
      email: memberId,
      title: `You've been added to the team "${teamName}"`,
      message: `You are now part of the team "${teamName}" for the event "${eventName}".`,
      type: "TEAM_INVITE",
    }));
    await prisma.notification.createMany({ data: notifications });

    return NextResponse.json(
      {
        message: "Team created successfully",
        team,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // console.error("Error creating team:", error);
    console.log(JSON.stringify(error)); // this will not cause any issue
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
