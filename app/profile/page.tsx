// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";
import { logout } from "@/lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState, useRef, Suspense } from "react";
import Link from "next/link";
import ProfileSkeleton from "@/components/LoadingSkeleton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import profilePic from "@/assets/images/profileImg.png";
import stars from "@/assets/images/white variant of pink stars.png";
import blueRedPlanet from "@/assets/images/HeroSectionImages/blue-red planet.png";

import starsMobile from "@/assets/images/white variant of pink stars Mobile.png";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import NotiIcon from "@/assets/images/notification icon.png";
import { FaBell, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Loading from "../loading";
export default function ProtectedComponent() {
  // -------------------for frontend constants etc --------------
  const [showArrows, setShowArrows] = useState(false);
  // const [notifications, setNotifications] = useState([]);
  // const [teams, setTeams] = useState([]);
  const { notifications, removeUser, fetchUser, teams, loading, user } =
    useUserStore();

  const sliderMobileRef = useRef();

  const userCookie = Cookies.get("user");
  const router = useRouter();
  // get the username form zustand, for now use email
  const email = userCookie ? JSON.parse(userCookie).email : null;

  // Loading state to handle skeleton display
  // const [loading, setLoading] = useState(true);

  // useEffect to fetch user data
  useEffect(() => {
    // console.log(user.email);
    if (!email) {
      return;
    }
    fetchUser(email);

    // const fetchUser = async () => {
    //   try {
    //     const response = await axios.post("/api/users", { email });
    //     if (response.data) {
    //       setUser({
    //         id: response.data.id,
    //         name: response.data.name,
    //         email: response.data.email,
    //         institution: response.data.institution,
    //       });

    //       setNotifications(response.data.notifications);
    //       const eventNames = response.data.teams.map(
    //         (team: { eventName: string }) => team.eventName.toLowerCase()
    //       );
    //       setTeams(eventNames);
    //     } else {
    //       // User not found
    //       setLoading(false);
    //     }
    //   } catch (error: any) {
    //     console.log("Error fetching user:", error);
    //     setLoading(false);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
  }, []);

  useEffect(() => {
    if (!userCookie || !user) {
      router.push("/login");
    }
  }, [userCookie, user]);

  if (!userCookie) {
    return null;
  }

  if (loading) {
    return <ProfileSkeleton />;
  }

  async function handleSignout() {
    // remove the user cookie
    await logout();
    removeUser();
    Cookies.remove("user");
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
    "aboltabol",
    "sparkhack",
    "eureka",
    "jutalks",
    "24frames",
    "circuistics",
    "algomaniac",
    "inquizzitive",
  ];

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative min-h-screen overflow-hidden pt-24 pb-8">
        <Navbar></Navbar>
        <div
          className="absolute top-0 left-0 w-full h-full bg-darkBlue 
      -z-20"
        ></div>
        {/* --------------------------stars Bg ------------------ */}
        <div className="absolute top-0 left-0 w-full h-full    -z-20">
          <Image
            src={stars}
            alt="Picture pink stars"
            className="absolute sm:block hidden animate-twinkle w-full object-cover top-0 left-0 -z-10"
          />
          <Image
            src={starsMobile}
            alt="Picture pink stars"
            className="absolute sm:hidden block  animate-twinkle w-full object-cover top-0 left-1/2 -translate-x-1/2 -z-10"
          />
          <Image
            src={starsMobile}
            alt="Picture pink stars"
            className="absolute sm:hidden block  w-full object-cover top-0 left-1/2 -translate-x-1/2 -z-10"
          />
          <Image
            src={blueRedPlanet}
            alt="Asteroid"
            className="absolute  sm:block hidden top-[16%]  right-[12%] animate-spin-slow  sm:w-42 w-32 object-cover"
          ></Image>
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
              <div className="flex items-start gap-4 justify-between">
                <h1 className="font-bold md:text-4xl text-xl gap-4 mb-2 capitalize">
                  {user?.name}
                </h1>
                <button
                  onClick={() => {
                    handleSignout();
                  }}
                  className="p-2 rounded-full  text-darkBlue hover:text-white hover:bg-softPurple transition-colors duration-300 font-semibold  flex items-center justify-center gap-x-2"
                >
                  <span>
                    <RiLogoutBoxRLine className="text-2xl text-white font-semibold" />
                  </span>
                </button>
              </div>

              <div className="flex items-center sm:gap-4 gap-2 mb-1">
                <GiGraduateCap className="sm:text-2xl text-lg" />
                <p className="text-sm sm:text-base">{user?.institution}</p>
              </div>
              <div className="flex items-center sm:gap-4 gap-2">
                <MdOutlineEmail className="sm:text-2xl text-lg" />
                <p className="text-sm sm:text-base">{email}</p>
              </div>
              {/* <button
              onClick={() => {
                handleSignout();
              }}
              className="  w-full py-1 rounded-full bg-white text-darkBlue hover:text-white hover:bg-softPurple transition-colors duration-300 font-semibold mt-2 flex items-center justify-center gap-x-2"
            >
              <span>
                <IoMdLogOut className="text-lg" />
              </span>
              Logout
            </button> */}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
            {/* --------------------------cardsslider----------------- */}
            <div
              className="relative  bg-white/20 shadow-md shadow-white/20 backdrop-blur-sm rounded-lg text-white py-4 md:py-6 px-4"
              onMouseEnter={() => setShowArrows(true)}
              onMouseLeave={() => setShowArrows(false)}
            >
              <h1 className="px-2 font-semibold text-xl">Registered events</h1>
              <div className="relative">
                <div
                  className="flex items-center gap-x-0 overflow-x-scroll scrollbar-hide md:mt-2 "
                  ref={sliderMobileRef}
                >
                  {loading && (
                    <div className="flex w-full-h-full">
                      <p className="text-2xl text-center text-white">
                        Fetching your data
                      </p>
                    </div>
                  )}
                  {!loading &&
                    teams.map((imgSrc, index) => {
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
                            alt={imgSrc}
                          ></Image>
                          {/* <h1 className="mt-2 text-center">{imgSrc.punchLine}</h1> */}
                        </Link>
                      );
                    })}
                  {!loading &&
                    events.map((imgSrc, index) => {
                      if (!teams.includes(imgSrc))
                        return (
                          <Link
                            href={`/event/` + imgSrc}
                            key={imgSrc + index}
                            className="text-white py-4 px-2  rounded-xl flex flex-col items-center"
                          >
                            <Image
                              src={`/CardsEvent/` + imgSrc + ".png"}
                              className="object-cover sm:min-w-44 min-w-36 grayscale"
                              height={400}
                              width={400}
                              alt={imgSrc}
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
            <div className="py-6 px-4 bg-white/20 shadow-md shadow-white/20 backdrop-blur-sm rounded-lg text-white overflow-hidden max-h-[380px]">
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
                      <div
                        key={data.id + index}
                        className="bg-white/80 rounded-md"
                      >
                        <div className="flex items-center gap-2 py-2 px-4">
                          {/* <FaBell className="text-darkBlue text-lg" /> */}
                          <Image
                            src={NotiIcon}
                            alt="bell icon"
                            height={24}
                            width={24}
                            className="size-6  object-cover"
                          ></Image>

                          <p className="text-darkBlue md:text-base text-sm font-medium">
                            {data.message}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
