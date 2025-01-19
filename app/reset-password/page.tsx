"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "@/lib/firebase";
import axios from "axios"; // For making API requests to update your database
import toast from "react-hot-toast";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleResetPassword = async () => {
    const oobCode = searchParams.get("oobCode");
    if (!oobCode) {
      setMessage("Invalid reset link.");
      return;
    }

    try {
      setLoading(true);
      await confirmPasswordReset(auth, oobCode, newPassword);

      // Update password in Prisma database
      //   await axios.post("/api/update-password", { newPassword });

      setMessage("Password has been reset successfully!");
      toast.success(
        "Password has been reset successfully! Login with your new password."
      );
      setTimeout(() => router.push("/login"), 3000);
    } catch (error: any) {
      setMessage(error.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-[100svh] bg-no-repeat bg-center bg-cover flex justify-center items-center "
      style={{ backgroundImage: `url('/RegisterBg.webp')` }}
    >
      <div className="text-white bg-darkBlue/90 border-white/80 border-2 w-[80vw] sm:max-w-[400px] sm:py-20 py-8 sm:px-8 px-6 rounded-2xl sm:rounded-[25px] relative">
        <div className="absolute top-5 right-5 flex gap-x-1">
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
        </div>
        <Link href="/" className="absolute top-5 left-5">
          <IoMdArrowRoundBack className="text-white text-2xl" />
        </Link>
        <div className="flex flex-col gap-y-2 items-center">
          <h2 className="sm:text-2xl text-lg font-bold mb-2">Reset Password</h2>
          <div className="flex flex-col w-full items-center gap-y-4 [&>*]:input-div">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/90"
              >
                New Password
              </label>
              <input
                placeholder="Enter your new password"
                type="text"
                id="password"
                name="password"
                required
                className="input-box"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="group transition-colors duration-300 w-full bg-white text-darkBlue font-semibold flex gap-x-1 justify-center items-center text-sm sm:text-base py-2 rounded-full border border-white border-md hover:text-white hover:bg-darkBlue/40 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-darkBlue group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <style>
                      {`
          .spinner {
            transform-origin: center;
            animation: spinner-animation 0.75s infinite linear;
          }
          @keyframes spinner-animation {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
                    </style>
                    <path
                      d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                      className="spinner"
                    />
                  </svg>

                  <p className="inline ">Creating new password...</p>
                </>
              ) : (
                "Reset Password"
              )}
            </button>
            {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
