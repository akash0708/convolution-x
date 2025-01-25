import EventHero from "@/components/EventHero";
import React from "react";
import Image from "next/image";
import sparkles from '@/assets/images/JuTalks/sparkles.png'
import confetti from '@/assets/images/JuTalks/confetti.png'

const aboutDecisia = `A dynamic panel discussion featuring industry professionals, field veterans from across various fields, and technology experts exploring the trends, challenges, and innovations shaping today's world. Speakers will share unique insights and personal experiences, fostering a rich exchange of unconventional ideas.`;
const HeroTalks = () => {
  return (
    <div
      
      className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
        
        "
    >
      {/* ----------------------for all the snowflakes and stuff------------------- */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#DDA6BC] via-[#E691B2] 
        via-[#ED7EAA] to-[#CB6990] -z-20"
      >
        {/* ----------------for bg image--------------- */}
        <div className="relative w-full h-full ">
        <Image src={sparkles} alt="strip bg" className="h-full absolute object-cover "></Image>
        <Image src={confetti} alt="strip bg" className="h-full absolute object-cover bottom-0 left-0"></Image>
        </div>
      </div>

      {/* ---------main content---------- */}
      <div className="h-full w-full  maxWidthForSections">
        <EventHero
          registeredUiBtn="bg-[#FCF0C4] text-[#512511]"
          about={aboutDecisia}
          logo="/JU Talks/logo.png"
          buttonDesign="hover:bg-[#FCF0C4] shadow-[#FCF0C4] hover:shadow-[#512511]  bg-[#512511] hover:opacity-90 text-[#FCF0C4] hover:text-[#512511]"
          planet="/JU Talks/planet.png"
          mode="solo"
          name="jutalks"
        ></EventHero>
      </div>
    </div>
  );
};

export default HeroTalks;
