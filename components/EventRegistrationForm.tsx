"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toast } from "react-hot-toast";

const teamSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters long"),
  members: z
    .array(z.string().email("Invalid email address").optional())
    .min(1, "At least one member is required")
    .max(3, "Team members cannot exceed 3"),
});

type TeamFormValues = z.infer<typeof teamSchema>;

const EventRegistrationForm: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const searchParams = useSearchParams(); // Extract event name from params
  const eventName = searchParams.get("eventName");
  const userCookie = Cookies.get("user");
  const email = userCookie ? JSON.parse(userCookie).email : null;

  useEffect(() => {
    // Fetch user details using post request to /api/user endpoint with email
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<TeamFormValues>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      teamName: "",
      members: [""], // Start with one empty member input
    },
  });

  const [memberCount, setMemberCount] = useState(1);

  const onSubmit = async (data: TeamFormValues) => {
    try {
      console.log("Submitting form:", {
        teamName: data.teamName,
        eventName,
        leaderId: id,
        members: data.members,
      });
      const response = await axios.post("/api/teams/register", {
        teamName: data.teamName,
        eventName, // Use the event name from the URL
        leaderId: id, // Use the user ID from the session
        members: data.members,
        leaderEmail: email,
      });
      console.log("Team created:", response.data);

      // alert("Team created successfully!");
      toast.custom((t: Toast) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Team Created
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Your team has been successfully created.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
      reset(); // Reset the form after successful submission
    } catch (error: any) {
      toast.custom((t: Toast) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Failed to Create Team
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {error.response?.data?.message || "Failed to create team"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  };

  const addMember = () => {
    if (memberCount < 3) {
      setMemberCount((prevCount) => prevCount + 1);
    }
  };

  const removeMember = (index: number) => {
    if (memberCount > 1) {
      setMemberCount((prevCount) => prevCount - 1);
      setValue(`members.${index}`, ""); // Clear the email field when removing
    }
  };

  return (
    <div className="text-white bg-darkBlue/90 border-white/80 border-2 w-[80vw] sm:max-w-[400px] sm:py-12 py-8 sm:px-8 px-6 rounded-2xl sm:rounded-[25px] relative">
      <div className="absolute top-5 left-5 flex gap-x-1">
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
          <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
      <h1 className="text-2xl font-semibold mb-4">Register a Team</h1>
      <form className="flex flex-col w-full items-center  [&>*]:input-div" onSubmit={handleSubmit(onSubmit)}>
        {/* Team Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white/90">Team Name</label>
          <input
            type="text"
            {...register("teamName")}
            className="input-box"
          />
          {errors.teamName && (
            <p className="text-red-500 text-sm">{errors.teamName.message}</p>
          )}
        </div>

        {/* Team Members */}
        <div className="mb-4 ">
          <label className="block text-lg text-center font-medium text-white/90">
            Team Members
          </label>
          <label>Team Leader: {name}</label>
          {Array.from({ length: memberCount }).map((_, index) => (
            <div key={index} className="flex space-x-2 mb-4">
              <input
                type="email"
                {...register(`members.${index}` as const)}
                placeholder={`Member ${index + 1} Email`}
                className="input-box"
              />
              {memberCount > 1 && (
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {errors.members && (
            <p className="text-red-500 text-sm">{errors.members.message}</p>
          )}
          {/* Add Member Button */}
          {memberCount < 3 && (
            <button
              type="button"
              onClick={addMember}
              className="text-white hover:text-white/80 transition-colors duration-300 font-semibold mt-2"
            >
              + Add Member
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="transition-colors duration-300 w-full bg-white text-darkBlue font-semibold flex gap-x-1 justify-center items-center text-sm sm:text-base py-2 rounded-full border border-white border-md hover:text-white hover:bg-darkBlue/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Registering..." : "Register Team"}
        </button>
      </form>
          </div>
    </div>
  );
};

export default EventRegistrationForm;
