import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import decisiaBgMobile from "@/assets/images/Algomaniac/starbgMobile.png";
import decisiaBg from "@/assets/images/Algomaniac/star bg.png";
import line1 from '@/assets/images/Algomaniac/line1.png'
import line3 from '@/assets/images/Algomaniac/line3.png'
import airBus from '@/assets/images/Algomaniac/airBus.png'
const aboutDecisia = ` An event focusing on competitive programming, this targets participants who wish to challenge their minds by engaging in solving puzzling problems and mind boggling tasks by what engineers strive for – coding!`;
const HeroAlgomaniac = () => {
  return (
    <div
      id="about"
      className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
  
  "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0D30BB] to-[#041550] -z-20">
        {/* ----------------for bg image--------------- */}
        <div className="relative w-full h-full ">
          <Image
            src={decisiaBg}
            className=" hidden md:block lg:w-full lg:h-auto h-full object-cover animate-twinkle  absolute   top-[0]  right-0 "
            alt="trees"
          />
          <Image
            src={decisiaBgMobile}
            className=" md:hidden block w-full  object-cover absolute opacity-80   left-1/2 -translate-x-1/2 bottom-0 "
            alt="trees"
          />
          <Image
            src={line1}
            className="absolute top-[40%] min-h-[200px]" 
            alt="trees"
          />
           <Image
            src={line3}
            className="absolute top-[12%] min-h-[100px] " 
            alt="trees"
          />
           <Image
            src={airBus}
            className="absolute md:block hidden bottom-[2%] right-[8%] w-[290px] object-cover " 
            alt="trees"
          />
        </div>
      </div>

      {/* ---------main content---------- */}
      <div className="h-full w-full  maxWidthForSections">
        <EventHero
          registeredUiBtn="bg-[#D11100] text-white"
          about={aboutDecisia}
          logo="/Algomaniac/logo.png"
          buttonDesign="shadow-white/70 hover:shadow-white/30  bg-[#0D30BB] hover:bg-white/90  hover:text-[#041550] text-[#ffffff]"
          planet="/Algomaniac/planet.png"
          mode="solo"
          name="algomaniac"
        ></EventHero>
      </div>
    </div>
  );
};

export default HeroAlgomaniac;
