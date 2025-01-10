// app/api/signup/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/lib/firebase"; // Import Firebase auth functions
import { prisma } from "@/lib/prisma"; // Import Prisma client
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, password, name, department, year, institution, phone } =
      await req.json();

    console.log("Signup request:", {
      email,
      name,
      department,
      year,
      institution,
      phone,
    });

    // Health check for email service
    const response = await axios.get(`${process.env.EMAIL_URL}`);
    console.log("Email service response:", response.data);

    // Create user with Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(userCredential.user);

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10) ;

    // Store user in Prisma database
    const newUser = await prisma.user.create({
      data: {
        email: userCredential.user.email!,
        name,
        password: password,
        department: department,
        year: year,
        institution: institution,
        phone: phone,
      },
    });

    await axios.post(`${process.env.EMAIL_URL}/api/register`, {
      to: newUser.email,
      subject: "ConvolutionX - Decade of Innovation",
      name: newUser.name,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
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
