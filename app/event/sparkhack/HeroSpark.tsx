import React from "react";
import planet from "@/assets/images/SparkHack/SparkHackPlanet.png";
import flake from "@/assets/images/SparkHack/flake.png";
import logo from "@/assets/images/SparkHack/Sparkhack logo.png";
import Image from "next/image";
import Link from "next/link";
import flakebg from "@/assets/images/SparkHack/flakebg.png"
const HeroSpark = () => {
  return (
    <div
      className="min-h-screen pt-24 sm:pt-0 flex justify-center items-center  relative
    
    "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF] -z-20">
        <div className="relative w-full h-full -z-10">
        <Image className="h-12 w-auto" src={flakebg} alt="flake" />
          <div className=" absolute top-[10%] left-40">
            <Image className="h-12 w-auto" src={flake} alt="flake" />
          </div>

          <div className=" absolute top-[25%] left-10">
            <Image className="h-12 w-auto" src={flake} alt="flake" />
          </div>

          <div className=" absolute top-[10%] right-10">
            <Image className="h-12 w-auto" src={flake} alt="flake" />
          </div>

          <div className=" absolute top-[20%] right-[10%]">
            <Image className="h-12 w-auto" src={flake} alt="flake" />
          </div>
        </div>
      </div>

      {/* ---------main content---------- */}
      <div className="h-full w-full  maxWidthForSections">
        <div className=" grid grid-cols-1 sm:grid-cols-2 ">
          <div className="flex justify-center items-center ">
            <Image
              className="sm:w-full h-auto sm:max-w-[400px] w-[70vw] animate-float-slow"
              src={planet}
              alt="sparkhack planet"
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={logo} alt="logo" className="sm:h-[250px] sm:w-auto h-auto w-[55vw]"></Image>
            <p className="text-white text-center sm:text-xl text-base text-shadow-dark">
              Eastern India's BIGGEST hackathon, focused on engineering
              technological solutions where teams build prototypes of products
              with notable social impact. The ideas will be judged by academics
              and industry experts.
            </p>
            <Link href="/event/register?eventName=sparkhack" className="bg-[#8FE3F0] shadow-sparkhack-register-hover py-2 sm:px-8 px-6 text-base sm:text-xl rounded-full hover:bg-[#3AADD9] hover:opacity-90 text-white transition-all duration-300 hover:shadow-sparkhack-register text-shadow-dark">
                <p className="    ">
                  Register Now
                </p>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSpark;
