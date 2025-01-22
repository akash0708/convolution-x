"use client";

import { sendEmailVerification } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VerifyEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter(); // Next.js router for navigation

  const handleResendEmail = async () => {
    setIsSending(true);
    setMessage("");

    try {
      // debug
      const user = auth.currentUser;

      if (!user) {
        setMessage("No user is currently signed in.");
        setIsSending(false);
        return;
      }

      // Send email verification
      await sendEmailVerification(user);
      setMessage("Verification email has been sent!");
    } catch (error) {
      setMessage("Failed to send verification email. Please try again.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Email Verification Required
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Please check your inbox for a verification email and click the link to
        verify your account.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleResendEmail}
          disabled={isSending}
          className={`px-6 py-2 rounded-md font-medium text-white transition 
        ${
          isSending
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        >
          {isSending ? "Sending..." : "Resend Verification Email"}
        </button>
        <button
          onClick={handleLoginRedirect}
          className="px-6 py-2 rounded-md font-medium text-white bg-green-500 hover:bg-green-600 transition"
        >
          Go to Login
        </button>
      </div>
      {message && <p className="mt-6 text-gray-500 text-center">{message}</p>}
    </div>
  );
};

export default VerifyEmail;
