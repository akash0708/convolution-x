// // app/api/teams/register/route.ts
// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";
// import { z } from "zod";

// const TeamRegistrationSchema = z.object({
//   eventId: z.string(),
//   eventName: z.string(),
//   leaderId: z.string(),
//   members: z
//     .array(
//       z.object({
//         email: z.string().email(),
//         role: z.string(),
//       })
//     )
//     .max(4, "Team can't have more than 4 members"),
// });

// export async function POST(request: Request) {
//   try {
//     console.log(request);

//     const body = request.json();
//     const validatedData = TeamRegistrationSchema.parse(body);

//     // Check if leader exists
//     const leader = await prisma.user.findUnique({
//       where: { id: validatedData.leaderId },
//     });

//     if (!leader) {
//       return NextResponse.json(
//         { error: "Team leader not found" },
//         { status: 404 }
//       );
//     }

//     // Check if leader is already in a team for this event
//     const existingTeamMember = await prisma.teamMember.findFirst({
//       where: {
//         userId: validatedData.leaderId,
//         eventId: validatedData.eventId,
//       },
//     });

//     if (existingTeamMember) {
//       return NextResponse.json(
//         { error: "You are already registered for this event" },
//         { status: 400 }
//       );
//     }

//     // Fetch all members by email
//     const memberEmails = validatedData.members.map((m) => m.email);
//     const existingUsers = await prisma.user.findMany({
//       where: { email: { in: memberEmails } },
//     });

//     // Check if all members exist
//     if (existingUsers.length !== memberEmails.length) {
//       return NextResponse.json(
//         { error: "One or more team members are not registered" },
//         { status: 400 }
//       );
//     }

//     // Check if any member is already in a team for this event
//     const existingMembers = await prisma.teamMember.findMany({
//       where: {
//         userId: { in: existingUsers.map((u) => u.id) },
//         eventId: validatedData.eventId,
//       },
//     });

//     if (existingMembers.length > 0) {
//       return NextResponse.json(
//         { error: "One or more members are already registered for this event" },
//         { status: 400 }
//       );
//     }

//     // Create team and members in a transaction
//     const result = await prisma.$transaction(async (tx) => {
//       // Create the team
//       const team = await tx.team.create({
//         data: {
//           eventId: validatedData.eventId,
//           eventName: validatedData.eventName,
//           leaderId: validatedData.leaderId,
//           maxSize: 4,
//         },
//       });

//       // Create team members
//       const teamMembers = await Promise.all(
//         existingUsers.map(async (user) => {
//           const memberData = validatedData.members.find(
//             (m) => m.email === user.email
//           );
//           return tx.teamMember.create({
//             data: {
//               teamId: team.id,
//               userId: user.id,
//               eventId: validatedData.eventId, // Added this field
//               role: memberData!.role,
//               status:
//                 user.id === validatedData.leaderId ? "ACCEPTED" : "PENDING",
//             },
//           });
//         })
//       );

//       // Create notifications for members
//       await Promise.all(
//         existingUsers
//           .filter((user) => user.id !== validatedData.leaderId)
//           .map((user) =>
//             tx.notification.create({
//               data: {
//                 userId: user.id,
//                 title: "Team Invitation",
//                 message: `You have been invited to join a team for ${validatedData.eventName}`,
//                 type: "TEAM_INVITE",
//               },
//             })
//           )
//       );

//       return { team, teamMembers };
//     });

//     return NextResponse.json(result, { status: 201 });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: error.errors }, { status: 400 });
//     }

//     console.error("Error registering team:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
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

    // console.log("team", await req.json());

    // Input validation
    if (!teamName || !eventName || !leaderId || !Array.isArray(teamMembers)) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // we will be getting emails of members and not ids, hence first we need to check if user with specified userid exists and then fetch the ids of the members
    // const memberEmails = members.map((member: string) => member.email);
    const existingUsers = await prisma.user.findMany({
      where: { email: { in: teamMembers } },
    });

    // Check if all members exist
    if (existingUsers.length !== teamMembers.length) {
      return NextResponse.json(
        { message: "One or more team members are not registered" },
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

    // Ensure team size doesn't exceed maxSize
    const maxSize = 4;
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
      include: {
        members: true,
      },
    });

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
