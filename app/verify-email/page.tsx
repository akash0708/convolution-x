"use client";

import React, { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";

const VerifyEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleResendEmail = async () => {
    setIsSending(true);
    setMessage("");

    try {
      const auth = getAuth();
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
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <h1>Email Verification Required</h1>
      <p>
        Please check your inbox for a verification email and click the link to
        verify your account.
      </p>
      <button
        onClick={handleResendEmail}
        disabled={isSending}
        style={{
          backgroundColor: isSending ? "#ccc" : "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: isSending ? "not-allowed" : "pointer",
        }}
      >
        {isSending ? "Sending..." : "Resend Verification Email"}
      </button>
      {/* button to redirect to login */}
      <button
        onClick={() => {
          window.location.href = "/login";
        }}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        Head to Login
      </button>
      {message && <p style={{ marginTop: "10px", color: "#555" }}>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
