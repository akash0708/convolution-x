import React from "react";
import planet from "@/assets/images/SparkHack/SparkHackPlanet.png";
import flake from "@/assets/images/SparkHack/flake.png";
import logo from "@/assets/images/SparkHack/Sparkhack logo.png";
import Image from "next/image";
import Link from "next/link";
const HeroSpark = () => {
  return (
    <div
      className="min-h-screen  flex justify-center items-center  relative
    
    "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8FE3F0] via-[#67C6DD] 
    to-[#3AADD9] -z-20">
        <div className="relative w-full h-full -z-10">
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
        <div className=" grid grid-cols-2 ">
          <div className="flex justify-center items-center ">
            <Image
              className="w-full h-auto max-w-[450px] animate-float-slow"
              src={planet}
              alt="sparkhack planet"
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image src={logo} alt="logo" className="h-[250px] w-auto"></Image>
            <p className="text-white text-center text-xl text-shadow-dark">
              Eastern India's BIGGEST hackathon, focused on engineering
              technological solutions where teams build prototypes of products
              with notable social impact. The ideas will be judged by academics
              and industry experts.
            </p>
            <Link href="/event/register?eventName=sparkhack" className="bg-[#8FE3F0] shadow-sparkhack-register-hover py-2 px-8 rounded-full hover:bg-[#3AADD9] hover:opacity-90 text-white transition-all duration-300 hover:shadow-sparkhack-register text-shadow-dark">
                <p className="text-xl    ">
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
