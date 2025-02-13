"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { z } from "zod";

const eventConfigurations = [
  { eventName: "circuistics", min: 2, max: 3 },
  { eventName: "sparkhack", min: 1, max: 3 },
  { eventName: "eureka", min: 2, max: 3 },
  { eventName: "inquizzitive", min: 1, max: 3 },
  { eventName: "decisia", min: 1, max: 4 },
  { eventName: "aboltabol", min: 0, max: 3 },
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
  const router = useRouter();

  const eventConfig = eventConfigurations.find(
    (event) => event.eventName === eventName
  ) || {
    min: 1,
    max: 3, // Default values if no match is found
  };

  const schema = teamSchema(eventConfig.min, eventConfig.max);
  type TeamFormValues = z.infer<typeof schema>;

  const userCookie = Cookies.get("users");
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
      // const response =
      await axios.post("/api/teams/register", {
        teamName: data.teamName,
        eventName, // Use the event name from the URL
        leaderId: id, // Use the user ID from the session
        members: data.members,
        leaderEmail: email,
        leaderName: name,
      });
      // console.log("Team created:", response.data);

      toast.success("Team Created Successfully");
      router.push("/profile");
      reset(); // Reset the form after successful submission
    } catch (error: any) {
      // console.error("Team error:", error);
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
    <div className="text-white bg-darkBlue/90 border-white/80 border-2 w-[80vw] sm:max-w-[400px] sm:py-12 py-8 sm:px-8 px-6 rounded-2xl sm:rounded-[25px] relative">
      <div className="absolute top-5 right-5 flex gap-x-1">
        <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
        <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
        <div className="bg-white/80 size-2 sm:size-4 rounded-full"></div>
      </div>
      <Link href="/" className="absolute top-5 left-5">
        <IoMdArrowRoundBack className="text-white text-2xl" />
      </Link>
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="text-2xl font-semibold mb-4">Register a Team</h1>
        <form
          className="flex flex-col w-full items-center  [&>*]:input-div"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Team Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/90">
              Team Name
            </label>
            <input
              type="text"
              {...register("teamName")}
              placeholder="Enter your Team Name"
              className="input-box"
            />
            {errors.teamName && (
              <p className="text-red-500 text-sm">{errors.teamName.message}</p>
            )}
          </div>

          {/* Team Members */}
          <div className="mb-4 ">
            <label className="block text-xl text-center font-semibold text-white/90 mb-2">
              Team Members
            </label>
            <p className="text-center w-full font-semibold">
              Team Leader: <span className="font-normal">{name}</span>
            </p>
            {Array.from({ length: memberCount }).map((_, index) => (
              <div key={index} className="flex space-x-2 mb-4">
                <input
                  type="email"
                  {...register(`members.${index}` as const)}
                  placeholder={`Member ${index + 1} Email`}
                  className="input-box"
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
            className="group transition-colors duration-300 w-full bg-white text-darkBlue font-semibold flex gap-x-1 justify-center items-center text-sm sm:text-base py-2 rounded-full border border-white border-md hover:text-white hover:bg-darkBlue/40 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
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

                <p className="inline ">Registering...</p>
              </>
            ) : (
              "Register Team"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
