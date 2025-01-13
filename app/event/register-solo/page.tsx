"use client";
import React, { Suspense, useEffect, useState } from "react";

import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full h-screen flex items-center justify-center ">
        <SoloRegistrationForm />
      </div>
    </Suspense>
  );
};

export default page;

const SoloRegistrationForm: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams(); // Extract event name from params
  const eventName = searchParams.get("eventName");
  const userCookie = Cookies.get("user");
  const email = userCookie ? JSON.parse(userCookie).email : null;

  const router = useRouter();

  useEffect(() => {
    // Fetch user and event details from cookies
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/users", { email });
        setId(response.data.id);
        setName(response.data.name);
      } catch (error: any) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);
      // console.log("Submitting registration:", {
      //   eventName,
      //   leaderId: id,
      //   leaderName: name,
      //   leaderEmail: email,
      // });

      const response = await axios.post("/api/solo/register", {
        eventName,
        leaderId: id,
        leaderName: name,
        leaderEmail: email,
      });

      // console.log("Solo registration successful:", response.data);

      // Show success notification
      toast.success("Registration successful!");
      router.push("/");
    } catch (error: any) {
      // console.log("Error registering solo:", error);

      // Show error notification
      toast.error(
        error.response?.data?.message || "Failed to register for the event."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center w-full"
      style={{ backgroundImage: `url('/RegisterBg.png')` }}
    >
      <div className=" text-white space-y-6 bg-darkBlue/90 border-white/80 border-2 w-[80vw] sm:max-w-[400px] sm:py-16  py-8 sm:px-8 px-6 rounded-2xl sm:rounded-[25px] relative">
        <div className="absolute top-5 left-5 flex gap-x-1">
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
        </div>
        <h1 className="sm:text-2xl text-center text-lg font-bold ">Registration</h1>

        {/* Participant Details */}
        <div className="">
          <label className="block text-sm font-medium text-white/90">
            Name
          </label>
          <p className="bg-transparent border-b-[3px] border-white/80  rounded-sm text-white/90  mt-1 min-h-6 w-full  text-sm sm:text-base">
            {name}
          </p>
        </div>
        <div className="">
          <label className="block text-sm font-medium text-white/90">
            Email
          </label>
          <p className="bg-transparent border-b-[3px] border-white/80  rounded-sm text-white/90  mt-1 min-h-6  w-full  text-sm sm:text-base">
            {email}
          </p>
        </div>
        <div className="">
          <label className="block text-sm font-medium text-white/90">
            Event
          </label>
          <p className="bg-transparent border-b-[3px] border-white/80  rounded-sm text-white/90  mt-1 min-h-6  w-full  text-sm sm:text-base">
            {eventName}
          </p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={onSubmit}
          disabled={loading}
          className="transition-colors duration-300 w-full bg-white text-darkBlue font-semibold flex gap-x-1 justify-center items-center text-sm sm:text-base py-2 rounded-full border border-white border-md hover:text-white hover:bg-darkBlue/40 disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {loading ? <>
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

                  <p className="inline ">Registering...</p>
                </> : "Confirm Registration"}
        </button>
      </div>
    </div>
  );
};
