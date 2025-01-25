import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import heroBg from "@/assets/images/Frames/heroBg.png"
import heroBgBottom from "@/assets/images/Frames/heroBgBottom.png"
const aboutDecisia = `Unleash your creativity in our open-theme photo contest! Submit  photos with captions, and compete for Judges’ and People’s Choice awards. Top 24 entries will be showcased for public voting. Stick to the rules—no plagiarism, no watermarks. Let your lens do the talking!`;
const HeroFrames = () => {
  return (
    <div
      id="about"
      className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
        
        "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1BA0E8] -z-20">
        {/* ----------------for bg image--------------- */}
      </div>
        <Image src={heroBg} alt="hero" className="absolute md:top-20 top-16 left-1/2 -translate-x-1/2" />
        <Image src={heroBgBottom} alt="hero" className="absolute bottom-0 left-1/2 -translate-x-1/2" />

      {/* ---------main content---------- */}
      <div className="h-full w-full  maxWidthForSections">
        <EventHero
          registeredUiBtn="bg-white text-[#1BA0E8]"
          about={aboutDecisia}
          logo="/Frames/logo.png"
          buttonDesign="hover:bg-[#ffff] text-[#1BA0E8]  shadow-[#ffff] hover:shadow-[#fff]/90 bg-white hover:opacity-80 "
          planet="/Frames/planet.png"
          mode="solo"
          name="24frames"
        ></EventHero>
      </div>
    </div>
  );
};

export default HeroFrames;
