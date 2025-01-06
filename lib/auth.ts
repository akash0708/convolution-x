import axios from "axios";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Cookies from "js-cookie";

export const signUp = async (email: string, password: string) => {
  // Create user in Firebase
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  // Send verification email
  await sendEmailVerification(userCredential.user);

  return userCredential;
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Set a cookie with user information or token
    Cookies.set("user", JSON.stringify(userCredential.user), { expires: 30 }); // Expires in 30 days

    console.log("userCredential", JSON.stringify(userCredential.user));
    console.log("user", { ...userCredential.user });
    console.log("emailVerified", userCredential.user.emailVerified);

    return {
      status: "success",
      data: userCredential.user,
      message: "Sign-in successful",
    };
  } catch (error) {
    let errorMessage = "An unexpected error occurred. Please try again.";

    if (error instanceof Error && "code" in error) {
      const firebaseError = error as { code: string; message: string };

      switch (firebaseError.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email format. Please check and try again.";
          break;
        case "auth/user-not-found":
          errorMessage = "No account found with this email. Please sign up.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Invalid credentials provided. Please try again.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many attempts. Please try again later.";
          break;
        default:
          errorMessage = firebaseError.message || errorMessage;
      }
    }

    return {
      status: "error",
      message: errorMessage,
    };
  }
};

export const logout = async () => {
  return await signOut(auth);
};
