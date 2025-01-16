import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, isEmailVerified } = body;

    // Validate required fields
    if (!email || typeof isEmailVerified !== "boolean") {
      return NextResponse.json(
        { error: "Email and isEmailVerified are required." },
        { status: 400 }
      );
    }

    // Find and update the user
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { emailVerified: isEmailVerified },
    });

    if (!updatedUser) {
      return NextResponse.json(
        { error: "User not found or update failed." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User email verification status updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user email verification status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
