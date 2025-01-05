// app/api/signup/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/lib/firebase"; // Import Firebase auth functions
import { prisma } from "@/lib/prisma"; // Import Prisma client
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    // Create user with Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(userCredential.user);

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in Prisma database
    await prisma.user.create({
      data: {
        email: userCredential.user.email!,
        name,
        password: password,
      },
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Add support for unsupported methods if needed
export function OPTIONS() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
