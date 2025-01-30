// app/api/superadmin/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust the import path to your Prisma client

export async function GET() {
  try {
    // Fetch the total number of users
    const totalUsers = await prisma.user.count();

    // Fetch the number of users per event
    const usersPerEvent = await prisma.team.groupBy({
      by: ["eventName"],
      _count: {
        _all: true,
      },
    });

    // Return the data as JSON
    return NextResponse.json({
      totalUsers,
      usersPerEvent,
    });
  } catch (error) {
    console.error("Error fetching superadmin data:", error);
    return NextResponse.json(
      { error: "Failed to fetch superadmin data" },
      { status: 500 }
    );
  }
}
