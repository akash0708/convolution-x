import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import HeroBg from '@/assets/images/Eureka/hero section.png'
import HeroBgBottom from '@/assets/images/Eureka/heroBottom.png'
import vine1 from '@/assets/images/Eureka/vine1.png'
import vine2 from '@/assets/images/Eureka/vine2.png'
import birds from '@/assets/images/Eureka/white brids.png'
const aboutDecisia = ` Welcome to “ Eureka! ”, the ultimate test of logic, reasoning, and puzzle-solving skills at the annual  techno management fest organised by JUEE ! This event will push your mental agility and problem-solving abilities to the limit with challenging riddles, complex puzzles, and mind-boggling aptitude questions. Assemble your team, sharpen your wits, and get ready to tackle Eureka's thrilling challenges that promise to be both stimulating and unforgettable!`;
const HomeEureka = () => {
    return (
        <div
          id="about"
          className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
      
      "
        >
          {/* ----------------------for all the snowflakes and stuff------------------- */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#DFF3BB] -z-20">
            {/* ----------------for bg image--------------- */}
            <div className="relative w-full h-full ">
              <Image
                src={HeroBg}
                className="absolute top-0 left-0 md:w-full md:h-auto h-full object-cover"
                alt="trees"
              />
              <Image
                src={HeroBgBottom}
                className="absolute bottom-0 w-full"
                alt="trees"
              />
              <Image
                src={vine1}
                className="absolute top-[5%] right-0 w-[250px] hidden md:block object-cover"
                alt="trees"
              />
              <Image
                src={vine2}
                className="absolute top-[8%] left-0 w-[250px] hidden md:block object-cover"
                alt="trees"
              />
              <Image
                src={vine1}
                className="absolute top-[5%] right-0 w-[200px] block md:hidden object-cover"
                alt="trees"
              />
              <Image
                src={vine2}
                className="absolute  top-[8%] left-0 w-[200px] block md:hidden object-cover"
                alt="trees"
              />
              <Image
                src={birds}
                className="absolute top-[25%] left-[42%] w-[100px]  object-cover"
                alt="trees"
              />
              
            </div>
          </div>
    
          {/* ---------main content---------- */}
          <div className="h-full w-full  maxWidthForSections sm:pb-4 pb-12">
            <EventHero
            textColor="text-[#115211]"
              registeredUiBtn="bg-[#115211] text-white"
              about={aboutDecisia}
              logo="/Eureka/logo.png"
              buttonDesign="shadow-white/70 hover:shadow-white/30  hover:bg-[#1C971C] bg-[#115211]   text-[#ffffff]"
              planet="/Eureka/planet.png"
              mode="team"
              name="eureka"
            ></EventHero>
          </div>
        </div>
      );
}

export default HomeEureka
