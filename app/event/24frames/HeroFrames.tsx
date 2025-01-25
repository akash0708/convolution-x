import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import decisiaBgMobile from '@/assets/images/Decisia/asteroid bg mobile.png'
import decisiaBg from '@/assets/images/Decisia/asteroid bg.png'
const aboutDecisia=`Unleash your creativity in our open-theme photo contest! Submit  photos with captions, and compete for Judges’ and People’s Choice awards. Top 24 entries will be showcased for public voting. Stick to the rules—no plagiarism, no watermarks. Let your lens do the talking!`
const HeroFrames = () => {
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
              
            <EventHero registeredUiBtn="bg-[#D11100] text-white" about={aboutDecisia} logo='/Decisia/decisia logo.webp' buttonDesign='hover:bg-[#D11100] shadow-[#D11100] hover:shadow-[#5B0804] text-shadow-dark bg-[#DE5C00] hover:opacity-90 text-white' planet='/Decisia/planet.webp' mode="team" name="decisia"></EventHero>
          </div>
        </div>
      );
}

export default HeroFrames
