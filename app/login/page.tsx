"use client";

import { signIn } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import axios from "axios";
import { applyActionCode, getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await signIn(email, password);

      console.log("email from res", res.data?.email);

      const userEmail = res.data?.email;

      if (res.status === "error") {
        throw new Error(res.message);
      }

      // api call to get user details based on email
      const response = await axios.post("/api/users", { email: userEmail });

      console.log("response after registration", response.data);

      if (response.data) {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          institution: response.data.institution,
        });
      }

      router.push("/profile"); // Redirect after successful login
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-[100svh] bg-no-repeat bg-center bg-cover flex justify-center items-center "
      style={{ backgroundImage: `url('/RegisterBg.png')` }}
    >
      <div className="text-white bg-darkBlue/90 border-white/80 border-2 w-[80vw] sm:max-w-[400px] sm:py-20 py-8 sm:px-8 px-6 rounded-2xl sm:rounded-[25px] relative">
        <div className="absolute top-5 left-5 flex gap-x-1">
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <h2 className="sm:text-2xl text-lg font-bold mb-2">
            Welcome back!
          </h2>
          <>
          {/*
           <p className="text-white/90 text-sm sm:text-base">Choose your registration method</p> */}
          {/* Google Sign In Button */}
          {/* <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-x-2 bg-transparent border border-gray-300 rounded-full px-4 py-2 transition-colors duration-300  hover:bg-white hover:text-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 "
          >
            <svg className="size-4 sm:size-5 " fill="currentColor" viewBox="0 0 24 24">
              <path
                fill=""
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill=""
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill=""
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill=""
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <p className="text-sm sm:text-base font-medium">
              
              Continue with Google
            </p>
          </button> */}

          {/* <div className="flex w-full justify-center items-center">
            <div className="w-full h-[1px] rounded-l-full bg-white/80"></div>
            <span className="text-nowrap px-2 text-sm sm:text-base">Or continue with email</span>
            <div className="w-full h-[1px] rounded-r-full bg-white/80"></div>
          </div> 
          */}
          </>

          {/* ------------------email form starts here------------------- */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full items-center gap-y-4 [&>*]:input-div"
          >
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}

<>
            {/* <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/90"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="input-box"
              />
            </div> */}
</>

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
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/90"
              >
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                className="input-box"
              />
            </div>

            <Link
              href="/register"
              className="text-center hover:text-white/80 text-sm sm:text-base text-white/90"
            >
              Don&apos;t have an account?
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="transition-colors duration-300 w-full bg-white text-darkBlue font-semibold flex gap-x-1 justify-center items-center text-sm sm:text-base py-2 rounded-full border border-white border-md hover:text-white hover:bg-darkBlue/40 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-darkBlue"
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

                  <p className="inline ">Creating account...</p>
                </>
              ) : (
                "Log in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
