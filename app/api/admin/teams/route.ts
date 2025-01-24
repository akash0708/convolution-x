// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { eventName, includeMembers } = await req.json();

    if (!eventName) {
      return NextResponse.json(
        { error: "Event name is required" },
        { status: 400 }
      );
    }

    const teams = await prisma.team.findMany({
      where: { eventName },
      include: {
        members: includeMembers
          ? {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                department: true,
                year: true,
                institution: true,
              },
            }
          : false, // Include members conditionally
      },
      orderBy: {
        createdAt: "asc", // Optional: Order by creation time
      },
    });

    // Group by team.id
    const groupedTeams = teams.reduce((acc, team) => {
      acc[team.id] = {
        id: team.id,
        teamName: team.teamName,
        eventName: team.eventName,
        leaderId: team.leaderId,
        maxSize: team.maxSize,
        members: team.members,
        createdAt: team.createdAt,
      };
      return acc;
    }, {});

    return NextResponse.json({ teams: groupedTeams });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
