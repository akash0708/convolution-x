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
    // debug
    // console.log("email", email, "password", password);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    //debug
    // console.log("userCredential", userCredential.user.email);
    // console.log("userCredential emailverfi", userCredential.user.emailVerified);

    // Set a cookie with user information or token
    Cookies.set("users", JSON.stringify(userCredential.user), { expires: 45 }); // Expires in 45 days

    // if email is not verified, return error, remove the set cookie and sign the user out
    if (!userCredential.user.emailVerified) {
      Cookies.remove("users");
      await signOut(auth);
      return {
        status: "error",
        message: "Verify your email in order to login.",
      };
    }

    // make an api call to /users/verify-email to update the emailVerified status from the userCredential.user.emailVerified, with payload email and isEmailVerified
    const res = await axios.post("/api/users/verify-email", {
      email: userCredential.user.email,
      isEmailVerified: userCredential.user.emailVerified,
    });

    //debug
    // console.log("res from verify email", res);

    if (res.status !== 200) {
      return {
        status: "error",
        message: "Verify your email in order to login.",
      };
    }

    // console.log("userCredential", JSON.stringify(userCredential.user));
    // console.log("user", { ...userCredential.user });
    // console.log("emailVerified", userCredential.user.emailVerified);

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
  Cookies.remove("users");
  return await signOut(auth);
};
