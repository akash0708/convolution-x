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
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  // Set a cookie with user information or token
  Cookies.set("user", JSON.stringify(userCredential.user), { expires: 30 }); // Expires in 30 day

  console.log("userCredential", JSON.stringify(userCredential.user));
  console.log("user", { ...userCredential.user });
  console.log("emailVerified", userCredential.user.emailVerified);

  // await axios.post("http://localhost:3001/api/register", {
  //   email,
  //   userName: userCredential.user.displayName || "user",
  // });

  return userCredential;
};

export const logout = async () => {
  return await signOut(auth);
};
