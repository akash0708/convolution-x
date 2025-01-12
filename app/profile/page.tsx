// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";
import { logout } from "@/lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import ProfileSkeleton from "@/components/LoadingSkeleton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import profilePic from "@/assets/images/profileImg.png";
import stars from "@/assets/images/white variant of pink stars.png";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import NotiIcon from "@/assets/images/notification icon.png"
import { FaBell, FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function ProtectedComponent() {
  const userCookie = Cookies.get("user");
  const router = useRouter();

  // -------------------for frontend constants etc --------------
  const [showArrows, setShowArrows] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [teams, setTeams] = useState([]);

  const sliderMobileRef = useRef();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const removeUser = useUserStore((state) => state.removeUser);

  // get the username form zustand, for now use email
  const email = userCookie ? JSON.parse(userCookie).email : null;

  // Loading state to handle skeleton display
  const [loading, setLoading] = useState(true);

  // useEffect to fetch user data
  useEffect(() => {
    if (!email) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/users", { email });
        if (response.data) {
          setUser({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            institution: response.data.institution,
          });

          setNotifications(response.data.notifications);
          const eventNames = response.data.teams.map(
            (team: { eventName: string }) => team.eventName
          );
          setTeams(eventNames);
        } else {
          // User not found
          setLoading(false);
        }
      } catch (error: any) {
        console.log("Error fetching user:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [email, setUser]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!userCookie || !user) {
    return <div>Please log in</div>;
  }

  async function handleSignout() {
    // remove the user cookie
    Cookies.remove("user");
    await logout();
    removeUser();
    router.push("/login");
  }

  const scrollLeft = () => {
    if (sliderMobileRef.current)
      sliderMobileRef.current.scrollBy({
        left: -sliderMobileRef.current.offsetWidth,
        behavior: "smooth",
      });
  };
  const scrollRight = () => {
    if (sliderMobileRef.current)
      sliderMobileRef.current.scrollBy({
        left: sliderMobileRef.current.offsetWidth,
        behavior: "smooth",
      });
  };

  const events = [
    "decisia",
    "decisia",
    "decisia",
    "decisia",
    "decisia",
    "decisia",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-8">
      <Navbar></Navbar>
      <div
        className="absolute top-0 left-0 w-full h-full bg-darkBlue 
      -z-20"
      ></div>
      {/* --------------------------stars Bg ------------------ */}
      <div className="absolute top-0 left-0 w-full h-full   animate-twinkle">
        <Image
          src={stars}
          alt="Picture pink stars"
          className="absolute  w-full object-cover top-0 left-0"
        />
      </div>
      <div className="maxWidthForSections   ">
        <div className="flex md:gap-x-8 gap-x-2 items-center">
          <div className="inline">
            <Image
              src={profilePic}
              alt="astronaut"
              className="sm:w-44 object-cover"
            ></Image>
          </div>
          <div className="text-white ">
            <h1 className="font-bold md:text-4xl text-xl mb-4">{user.name}</h1>
            <div className="flex items-center gap-4 mb-1">
              <GiGraduateCap className="text-2xl" />
              <p className="text-sm sm:text-base">{user.institution}</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="text-2xl" />
              <p className="text-sm sm:text-base">{email}</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
          {/* --------------------------cardsslider----------------- */}
          <div
            className="relative  bg-white/10 shadow-md shadow-white/20 backdrop-blur-sm rounded-lg text-white py-4 md:py-6 px-4"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <h1 className="px-2 font-semibold text-xl">Registered events</h1>
            <div className="relative">
              <div
                className="flex items-center gap-x-0 overflow-x-scroll scrollbar-hide md:mt-2 "
                ref={sliderMobileRef}
              >
                {events.map((imgSrc, index) => {
                  return (
                    <Link
                      href={`/event/` + imgSrc}
                      key={imgSrc + index}
                      className="text-white py-4 px-2  rounded-xl flex flex-col items-center"
                    >
                      <Image
                        src={`/CardsEvent/` + imgSrc + ".png"}
                        className="object-cover sm:min-w-44 min-w-36"
                        height={400}
                        width={400}
                        alt={imgSrc.event}
                      ></Image>
                      {/* <h1 className="mt-2 text-center">{imgSrc.punchLine}</h1> */}
                    </Link>
                  );
                })}
              </div>

              {/* ---------hover buttons-------------- */}
              {showArrows && (
                <>
                  <button
                    className="absolute top-1/2 -translate-y-1/2  left-0 hidden sm:flex items-center justify-center 
                      size-10 rounded-full bg-white bg-opacity-80 hover:bg-opacity-95 text-darkBlue z-10
                      "
                    onClick={scrollLeft}
                  >
                    <FaChevronLeft size={24} />
                  </button>

                  <button
                    className="absolute top-1/2 -translate-y-1/2  right-0 hidden sm:flex items-center justify-center
                      size-10 rounded-full bg-white bg-opacity-80 hover:bg-opacity-95 text-darkBlue z-10
                      "
                    onClick={scrollRight}
                  >
                    <FaChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* --------------------notification------------------- */}
          <div className="py-6 px-4 bg-white/10 shadow-md shadow-white/20 backdrop-blur-sm rounded-lg text-white overflow-hidden max-h-[380px]">
            <div className="px-2 flex justify-between items-center">
              <h1 className="font-semibold md:text-xl text-lg mb-4">
                Notifications
              </h1>
              <FaBell className="text-white md:text-xl text-lg" />
            </div>
            {notifications.length == 0 && (
              <div className="flex justify-center items-center  h-full w-full">
                <h1 className="px-2 font-semibold text-xl ">
                  Your messages will appear here.
                </h1>
              </div>
            )}
            {notifications.length > 0 && (
              <div className="flex flex-col gap-y-4  overflow-y-scroll h-[88%] scrollbar-hide">
                {notifications.map((data, index) => {
                  return (
                    <Link
                      key={data.id + index}
                      href={`/event/` + data.title}
                      className="bg-white/80 rounded-md"
                    >
                      <div className="flex items-center gap-2 py-2 px-4">
                        {/* <FaBell className="text-darkBlue text-lg" /> */}
            <Image src={NotiIcon} alt="" className="w-6"></Image>

                        <p className="text-darkBlue md:text-base text-sm font-medium">
                          {data.message}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {email}
        </div>
        <div className="text-lg text-gray-600 mb-6">Name: {user?.name}</div>
        <div className="flex space-x-4">
          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
          <Link
            href={"/"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div> */}
    </div>
  );
}
