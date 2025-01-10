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
      console.log("Submitting registration:", {
        eventName,
        leaderId: id,
        leaderName: name,
        leaderEmail: email,
      });

      const response = await axios.post("/api/solo/register", {
        eventName,
        leaderId: id,
        leaderName: name,
        leaderEmail: email,
      });

      console.log("Solo registration successful:", response.data);

      // Show success notification
      toast.success("Registration successful!");
      router.push("/");
    } catch (error: any) {
      console.log("Error registering solo:", error);

      // Show error notification
      toast.error(
        error.response?.data?.message || "Failed to register for the event."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/4 mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Registration</h1>

      {/* Participant Details */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Name</label>
        <p className="p-2 border bg-gray-100 rounded-md">{name}</p>
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Email</label>
        <p className="p-2 border bg-gray-100 rounded-md">{email}</p>
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Event</label>
        <p className="p-2 border bg-gray-100 rounded-md">{eventName}</p>
      </div>

      {/* Confirm Button */}
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        {loading ? "Registering..." : "Confirm Registration"}
      </button>
    </div>
  );
};
