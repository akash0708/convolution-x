"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleResetPassword = async () => {
    try {
      // debug
      //   console.log("email", email);
      setLoading(true);
      setMessage("");
      const res = await sendPasswordResetEmail(auth, email, {
        url: `${process.env.NEXT_PUBLIC_URL}/reset-password`,
      });
      setMessage("Password reset email sent! Please check your inbox.");
      toast.success("Password reset email sent! Please check your inbox.");
      router.push("/login");
      // debug
      //   console.log("response from sendPasswordResetEmail", res);
    } catch (error: any) {
      setMessage(error.message || "An error occurred. Please try again.");
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
          <h2 className="sm:text-2xl text-lg font-bold mb-2">
            Forgot Password
          </h2>
          {/* <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mb-4 w-80"
          /> */}
          <div className="flex flex-col w-full items-center gap-y-4 [&>*]:input-div">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/90"
              >
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
                required
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <button onClick={handleResetPassword}>Send Reset Link</button> */}
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

                  <p className="inline ">Sending Reset link..</p>
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
