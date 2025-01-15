"use client"
import React from "react";
import planet from "@/assets/images/SparkHack/SparkHackPlanet.png";
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
import logo from "@/assets/images/SparkHack/Sparkhack logo.png";
import Image from "next/image";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";

const HeroSpark = () => {
  const {teams} = useUserStore()
    const isRegistered=teams.includes('sparkhack')
  return (
    <div id="about"
      className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
    
    "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF] -z-20">
        <div className="relative w-full h-full -z-10">
        <Image
        src={flakebg}
        className=" hidden md:block lg:w-full lg:h-auto h-full object-cover  absolute opacity-40  top-[0]  right-0 "
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" md:hidden block h-full  object-cover absolute opacity-60   top-1/2 -translate-y-1/2 right-0 z-10"
        alt="trees"
      />
        </div>
      </div>

      {/* ---------main content---------- */}
      <div className="h-full w-full  maxWidthForSections">
        <div className=" grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center items-center ">
            <Image
              className="sm:w-full h-auto sm:max-w-[400px] w-[70vw] animate-float-slow"
              src={planet}
              alt="sparkhack planet"
            ></Image> 
          </div>

          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={logo} alt="logo" className="sm:w-[35vw] object-cover w-[70vw]"></Image>
            <p className="text-white text-center sm:text-xl text-base text-shadow-dark">
              Eastern India&apos;s BIGGEST hackathon, focused on engineering
              technological solutions where teams build prototypes of products
              with notable social impact. The ideas will be judged by academics
              and industry experts.
            </p>
            {isRegistered?<p className={`py-2 sm:px-8 px-6 text-base sm:text-xl rounded-full text-white text-shadow-dark bg-[#8FE3F0]`}>You have Registered for this Event</p> :<Link href="/event/register-team?eventName=sparkhack" className="bg-[#8FE3F0] shadow-sparkhack-register py-2 sm:px-8 px-6 text-base sm:text-xl rounded-full hover:bg-white hover:text-[#8FE3F0] hover:text-shadow-light hover:opacity-90 text-white transition-all duration-300 hover:shadow-sparkhack-register-hover text-shadow-dark">
                <p className="    ">
                  Register Now
                </p>
            </Link>}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSpark;
