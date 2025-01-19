import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import flakebg from "@/assets/images/Circuistics/whitestarbg.png";
import herobg from "@/assets/images/Circuistics/heroBg.png";
import herobgMobile from "@/assets/images/Circuistics/heroMobile.png";
import flakebgMobile from "@/assets/images/Circuistics/phone white star bg.png";
const aboutDecisia=`Get ready to unleash your inner inventor! Imagine bringing your most innovative electronics project to life. Circuistics is your chance to make it happen! Join us for an experience where knowledge meets creativity and excellence is born. Design your own electronic masterpiece and compete for exciting prizes!`

const HeroCircuistics = () => {
    return (
        <div id="about"
          className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
        
        "
        >
          {/* ----------------------for all the snowflakes and stuff------------------- */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#3122B1] to-[#150E4B] -z-20">
    
          {/* ----------------for bg image--------------- */}
            <div className="relative w-full h-full ">
            <Image
            src={flakebg}
            className=" h-auto hidden sm:block w-full  absolute opacity-90 animate-twinkle object-cover  top-0 right-0 -z-10"
            alt="trees"
          />
          <Image
            src={flakebgMobile}
            className=" sm:hidden block h-full  object-cover absolute opacity-90 animate-twinkle   bottom-0 right-0 -z-10"
            alt="trees"
          />
            <Image
            src={herobg}
            className=" h-auto hidden sm:block w-full  absolute opacity-90 object-cover  top-0 right-0 -z-10"
            alt="trees"
          />
          <Image
            src={herobgMobile}
            className="  sm:hidden block w-[150vw] absolute opacity-90 object-cover  top-[22%] left-0 -z-10"
            alt="trees"
          />
           
            </div>
          </div>
    
          {/* ---------main content---------- */}
          <div className="h-full w-full  maxWidthForSections">          
    
            <EventHero registeredUiBtn="bg-[#D11100] text-white" about={aboutDecisia} logo='/Circuistics/logo.png' buttonDesign='hover:bg-[#3122B1] shadow-white hover:shadow-[#3122B1] hover:text-white  bg-white hover:opacity-90 text-[#3122B1]' planet='/Circuistics/planet.png' mode="team" name="circuistics"></EventHero>
          </div>
        </div>
      );
}

export default HeroCircuistics
