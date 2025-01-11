// app/api/users/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
      include: {
        teams: true, // Include related teams
        notifications: true, // Include related notifications
      },
    });

    // console.log("Existing user:", existingUser);

    return NextResponse.json(
      {
        id: existingUser?.id,
        email: existingUser?.email,
        name: existingUser?.name,
        institution: existingUser?.institution,
        teams: existingUser?.teams, // Include teams in response
        notifications: existingUser?.notifications, // Include notifications in response
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
