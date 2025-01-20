"use client";

import { signIn } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../loading";
import { sendEmailVerification } from "firebase/auth";
import Cookies from "js-cookie";

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResendVerification, setShowResendVerification] = useState(false);
  const [tempUser, setTempUser] = useState();

  // run an useEffect when showResendVerification value changes, check if a cookie "tempUser" exits, if it does, use the user object from it to send a verification email
  useEffect(() => {
    setTempUser(Cookies.get("tempUsers"))
    console.log("tempUser", tempUser);
    
  }, [showResendVerification, tempUser]);

  const {user} = useUserStore();
  // if(user)  router.push("/profile");
  const {setUser} = useUserStore();

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

      // if error.message is "Verify your email in order to login." then set show resendVerification to true
      if (error instanceof Error && error.message === "Verify your email in order to login.") {
        setShowResendVerification(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={ <Loading/>}>

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
        <Link href='/' className="absolute top-5 left-5">
        <IoMdArrowRoundBack className="text-white text-2xl" />
        </Link>
        <div className="flex flex-col gap-y-2 items-center">
          <h2 className="sm:text-2xl text-lg font-bold mb-2">
            Welcome back!
          </h2>

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

                  <p className="inline ">Analyzing Credentials..</p>
                </>
              ) : (
                "Log in"
              )}
            </button>

            <Link
              href="/forgot-password"
              className="text-center hover:text-white/80 text-sm sm:text-base text-white/90"
            >
              Forgot Password?
            </Link>
            {showResendVerification && (
              <button
                onClick={() => {
                  sendEmailVerification(user);
                  toast.success("Verification email sent successfully");
                }}
                className="text-center hover:text-white/80 text-sm sm:text-base text-white/90"
              >
                Resend Verification Email
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
    </Suspense>
  );
}
