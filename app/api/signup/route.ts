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

    // console.log("Signup request:", {
    //   email,
    //   name,
    //   department,
    //   year,
    //   institution,
    //   phone,
    // });

    // Health check for email service
    axios
      .get(`${process.env.EMAIL_URL}`)
      .catch((err) =>
        console.error("Failed to warm up email service:", err.message)
      );

    // Create user with Firebase
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user, {
        url: `${process.env.NEXT_PUBLIC_URL}/login`,
        handleCodeInApp: true,
      });
    } catch (firebaseError: any) {
      console.error("Firebase error:", firebaseError);
      let errorMessage = "An error occurred while creating your account.";
      if (firebaseError.code === "auth/email-already-in-use") {
        errorMessage =
          "This email is already registered. Please use a different email.";
      } else if (firebaseError.code === "auth/weak-password") {
        errorMessage =
          "The password is too weak. Please use a stronger password.";
      } else if (firebaseError.code === "auth/invalid-email") {
        errorMessage =
          "The email address is invalid. Please provide a valid email.";
      }
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    // Store user in Prisma database
    let newUser;
    try {
      newUser = await prisma.user.create({
        data: {
          email: userCredential.user.email!,
          name,
          password: password, // Ideally, hash the password before storing
          department: department,
          year: year,
          institution: institution,
          phone: phone,
        },
      });
    } catch (prismaError: any) {
      console.error("Prisma error:", prismaError);
      return NextResponse.json(
        {
          error: "There was an issue saving your data. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Send confirmation email
    try {
      await axios.post(`${process.env.EMAIL_URL}/api/register`, {
        to: newUser.email,
        subject: "ConvolutionX - Decade of Innovation",
        name: newUser.name,
      });
    } catch (emailError: any) {
      console.error("Error sending confirmation email:", emailError);
      return NextResponse.json(
        {
          error:
            "Your account was created, but we could not send the confirmation email.",
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          institution: newUser.institution,
        },
        { status: 207 }
      );
    }

    return NextResponse.json(
      {
        message:
          "User created successfully. Please verify your email to complete the registration process.",
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        institution: newUser.institution,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// Add support for unsupported methods if needed
export function OPTIONS() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
