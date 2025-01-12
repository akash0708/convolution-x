import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import decisiaBgMobile from '@/assets/images/Decisia/asteroid bg mobile.png'
import decisiaBg from '@/assets/images/Decisia/asteroid bg.png'
const aboutDecisia=`Decisia is like our version of "Shark Tank." It's your platform to pitch that dream business idea. You can be the CEO, create the product, showcase your profit margins, and pitch it to the "sharks'' for potential investment. Dive into the opportunity to turn your business dreams into reality!`
const HeroDecisia = () => {
  return (
    <div id="about"
      className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
    
    "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#DE5C00] via-[#77340F] 
    via-[#931308] to-[#5B0804] -z-20">

      {/* ----------------for bg image--------------- */}
        <div className="relative w-full h-full ">
        <Image
        src={decisiaBg}
        className=" hidden md:block lg:w-full lg:h-auto h-full object-cover animate-twinkle  absolute opacity-90  top-[0]  right-0 "
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" md:hidden block w-full  object-cover absolute opacity-80   left-1/2 -translate-x-1/2 bottom-0 "
        alt="trees"
      />
        </div>
      </div>

      {/* ---------main content---------- */}
      <div className="h-full w-full  maxWidthForSections">
        <>
        {/* <div className=" grid grid-cols-1 gap-y-2 md:grid-cols-2 ">
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
            Decisia is like our version of "Shark Tank." It's your platform to pitch that dream business idea. You can be the CEO, create the product, showcase your profit margins, and pitch it to the "sharks'' for potential investment. Dive into the opportunity to turn your business dreams into reality!
            </p>
            <Link href="/event/register?eventName=sparkhack" className="hover:bg-[#D11100] shadow-[#D11100] shadow-lg py-2 sm:px-8 px-6 text-base sm:text-xl rounded-full bg-[#DE5C00] hover:opacity-90 text-white transition-all duration-300 hover:shadow-[#5B0804] text-shadow-dark">
                <p className="    ">
                  Register Now
                </p>
            </Link>
           
          </div>
        </div> */}
        </>

        <EventHero about={aboutDecisia} logo='/Decisia/decisia logo.png' buttonDesign='hover:bg-[#D11100] shadow-[#D11100] hover:shadow-[#5B0804] text-shadow-dark bg-[#DE5C00] hover:opacity-90 text-white' planet='/Decisia/planet.png' mode="team" name="decisia"></EventHero>
      </div>
    </div>
  );
};

export default HeroDecisia;
