"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

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

      alert("Team created successfully!");
      reset(); // Reset the form after successful submission
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to create team");
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
    <div className="w-1/4 mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Register a Team</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Team Name */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Team Name</label>
          <input
            type="text"
            {...register("teamName")}
            className="w-full p-2 border rounded-md"
          />
          {errors.teamName && (
            <p className="text-red-500 text-sm">{errors.teamName.message}</p>
          )}
        </div>

        {/* Team Members */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">
            Team Members
          </label>
          <label>Team Leader: {name}</label>
          {Array.from({ length: memberCount }).map((_, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="email"
                {...register(`members.${index}` as const)}
                placeholder={`Member ${index + 1} Email`}
                className="w-full p-2 border rounded-md"
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
              className="text-blue-600 font-semibold"
            >
              + Add Member
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          {isSubmitting ? "Registering..." : "Register Team"}
        </button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
