// components/RegisterForm.tsx
"use client";

import { useUserStore } from "@/store/userStore";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../loading";
import { z } from "zod";

const registrationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  institution: z.string().nonempty("Institution is required"),
  department: z.string().nonempty("Department is required"),
  year: z.enum(["UG1", "UG2", "UG3", "UG4", "PG", "Other", "School"], {
    invalid_type_error: "Invalid year selected",
  }),
});

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUserStore();
  const { setUser } = useUserStore();

  const handleEmailRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      phone: formData.get("phone") as string,
      institution: formData.get("institution") as string,
      department: formData.get("department") as string,
      year: formData.get("year") as string,
    };

    const validation = registrationSchema.safeParse(data);
    if (!validation.success) {
      // Extract the first error message and set it to the error state
      setError(validation.error.errors[0].message);
      setLoading(false);
      return;
    }

    try {
      // First register the user
      const res = await axios.post("/api/signup", validation.data);
      console.log(res.data);
      toast.success(res.data.message);
      // setUser({
      //   id: res.data.id,
      //   name: res.data.name,
      //   email: res.data.email,
      //   institution: res.data.institution,
      // });
      // redirect to verify email page
      router.push("/verify-email");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";

      if (
        errorMessage ===
        "Your account was created, but we could not send the confirmation email."
      ) {
        router.push("/verify-email");
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="h-[100svh] bg-no-repeat bg-center bg-cover flex justify-center items-center "
        style={{ backgroundImage: `url('/RegisterBg.webp')` }}
      >
        <div className="text-white bg-darkBlue/90 border-white/80 border-2 w-[80vw] sm:max-w-[400px]  py-8 sm:px-8 px-6 rounded-2xl sm:rounded-[25px] relative">
          <div className="absolute top-5 right-5 flex gap-x-1">
            <div className="bg-white/80 size-2 sm:size-3 rounded-full"></div>
            <div className="bg-white/80 size-2 sm:size-3 rounded-full"></div>
            <div className="bg-white/80 size-2 sm:size-3 rounded-full"></div>
          </div>
          <Link href="/" className="absolute top-5 left-5">
            <IoMdArrowRoundBack className="text-white text-2xl" />
          </Link>
          <div className="flex flex-col gap-y-2 items-center">
            <h2 className="sm:text-2xl text-lg font-bold mb-2">
              Create an Account
            </h2>

            {/* ------------------email form starts here------------------- */}
            <form
              onSubmit={handleEmailRegister}
              className="flex flex-col w-full items-center gap-y-4 [&>*]:input-div"
            >
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                  {error}
                </div>
              )}

              <div>
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
              </div>

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

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/90"
                >
                  Phone
                </label>
                <input
                  placeholder="Enter your phone number"
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="input-box"
                />
              </div>

              <div>
                <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-white/90"
                >
                  Institution
                </label>
                <input
                  placeholder="Institution Name"
                  type="text"
                  id="institution"
                  name="institution"
                  required
                  className="input-box"
                />
              </div>
              <div className="flex gap-2">
                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-white/90"
                  >
                    Department
                  </label>
                  <input
                    placeholder="Dept. of Study"
                    type="text"
                    id="department"
                    name="department"
                    required
                    className="input-box"
                  />
                </div>

                {/* <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-white/90"
                >
                  Year
                </label>
                <input
                  placeholder="(eg. UG1, PG1)"
                  type="text"
                  id="year"
                  name="year"
                  required
                  className="input-box"
                />
              </div> */}
                <div className="w-1/2">
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-white"
                  >
                    Year
                  </label>
                  <div className="relative  ">
                    <select
                      id="year"
                      name="year"
                      required
                      className="block w-full rounded-md border-white  bg-darkBlue/90 text-white py-2 shadow-sm focus:border-white focus:ring-white sm:text-base text-sm"
                    >
                      <option value="" disabled selected hidden>
                        (e.g., UG1, PG1)
                      </option>
                      <option value="School">School</option>
                      <option value="UG1">UG1</option>
                      <option value="UG2">UG2</option>
                      <option value="UG3">UG3</option>
                      <option value="UG4">UG4</option>
                      <option value="PG">PG</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <Link
                href="/login"
                className="text-center hover:text-white/80 text-sm sm:text-base text-white/90"
              >
                Already have an account?
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

                    <p className="inline ">Creating account...</p>
                  </>
                ) : (
                  "Register with Email"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
