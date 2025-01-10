"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { z } from "zod";

const eventConfigurations = [
  { eventName: "circuistics", min: 3, max: 4 },
  { eventName: "sparkhack", min: 4, max: 5 },
  { eventName: "eureka", min: 3, max: 4 },
  { eventName: "inquizzitive", min: 2, max: 4 },
  { eventName: "decisia", min: 3, max: 5 },
];

const teamSchema = (min: number, max: number) =>
  z.object({
    teamName: z.string().min(3, "Team name must be at least 3 characters long"),
    members: z
      .array(z.string().email("Invalid email address"))
      .min(min, `At least ${min} member(s) required`)
      .max(max, `Cannot exceed ${max} member(s)`)
      .refine(
        (members) => members.filter(Boolean).length >= min,
        `At least ${min} team member${min > 1 ? "s are" : " is"} required`
      ),
  });

// type TeamFormValues = z.infer<typeof teamSchema>;

const EventRegistrationForm: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const searchParams = useSearchParams(); // Extract event name from params
  const eventName = searchParams.get("eventName");

  const eventConfig = eventConfigurations.find(
    (event) => event.eventName === eventName
  ) || {
    min: 1,
    max: 3, // Default values if no match is found
  };

  const schema = teamSchema(eventConfig.min, eventConfig.max);
  type TeamFormValues = z.infer<typeof schema>;

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
    watch,
    setValue,
  } = useForm<TeamFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      teamName: "",
      members: Array(eventConfig.min).fill(""),
    },
  });

  const members = watch("members");
  const [memberCount, setMemberCount] = useState(eventConfig.min);

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
      // toast.custom((t: Toast) => (
      //   <div
      //     className={`${
      //       t.visible ? "animate-enter" : "animate-leave"
      //     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      //   >
      //     <div className="flex-1 w-0 p-4">
      //       <div className="flex items-start">
      //         <div className="ml-3 flex-1">
      //           <p className="text-sm font-medium text-gray-900">
      //             Team Created
      //           </p>
      //           <p className="mt-1 text-sm text-gray-500">
      //             Your team has been successfully created.
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="flex border-l border-gray-200">
      //       <button
      //         onClick={() => toast.dismiss(t.id)}
      //         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      //       >
      //         Close
      //       </button>
      //     </div>
      //   </div>
      // ));
      // replace custom toast with toast.success("Team Created Successfully")
      toast.success("Team Created Successfully");
      reset(); // Reset the form after successful submission
    } catch (error: any) {
      // toast.custom((t: Toast) => (
      //   <div
      //     className={`${
      //       t.visible ? "animate-enter" : "animate-leave"
      //     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      //   >
      //     <div className="flex-1 w-0 p-4">
      //       <div className="flex items-start">
      //         <div className="ml-3 flex-1">
      //           <p className="text-sm font-medium text-gray-900">
      //             Failed to Create Team
      //           </p>
      //           <p className="mt-1 text-sm text-gray-500">
      //             {error.response?.data?.message || "Failed to create team"}
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="flex border-l border-gray-200">
      //       <button
      //         onClick={() => toast.dismiss(t.id)}
      //         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      //       >
      //         Close
      //       </button>
      //     </div>
      //   </div>
      // ));
      toast.error(`Failed to create team: ${error.response?.data?.message}`);
    }
  };

  const addMember = () => {
    if (memberCount < eventConfig.max) {
      setMemberCount(memberCount + 1);
      setValue("members", [...members, ""]);
    }
  };

  const removeMember = (index: number) => {
    if (memberCount > eventConfig.min) {
      const updatedMembers = members.filter((_, i) => i !== index);
      setValue("members", updatedMembers);
      setMemberCount(updatedMembers.length);
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
              {/* replace the obnoxious looking button with a trash icon from radix */}
              {memberCount > eventConfig.min && (
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  <BiTrash />
                </button>
              )}
            </div>
          ))}
          {errors.members && (
            <p className="text-red-500 text-sm">
              {Array.isArray(errors.members)
                ? errors.members[0]?.message
                : errors.members.message}
            </p>
          )}
          {/* Add Member Button */}
          {memberCount < eventConfig.max && (
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
