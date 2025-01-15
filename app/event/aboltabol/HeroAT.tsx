import EventHero from "@/components/EventHero";
import Image from "next/image";
import React from "react";
import ray from "@/assets/images/AbolTabol/ray.webp";
import navImg from "@/assets/images/AbolTabol/navImage.webp";
import bubbles from "@/assets/images/AbolTabol/heroBubbles.webp";
import darkfishes from "@/assets/images/AbolTabol/darkfishes.webp";
import goldfish from "@/assets/images/AbolTabol/goldfish.webp";
import flow from "@/assets/images/AbolTabol/heroBottom flow.webp";
const aboutAbolTabol =
  "Inspired by MIT’s ‘Bahfest’ & titled after Sukumar Ray’s cult classic, Abol Tabol is the sci-fi dream come true event for those young brilliant minds who not only imagine superficial things but also possess the ability to land them on real ground.";
const HeroAT = () => {
  return (
    <div
      id="about"
      className="min-h-screen pt-24 md:pt-0 flex justify-center items-center  relative
    
    "
    >
      {/* ----------------for bg image--------------- */}
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-20"
      >
        <div className="relative w-full h-full -z-10">
        <Image
          src={navImg}
          className=" object-cover  absolute   top-10  "
          alt="trees"
        />
        <Image
          src={ray}
          className=" object-cover top-0 left-0 md:h-[92%] md:w-auto h-1/2 sm:opacity-30 opacity-25"
          alt="trees"
        />
         <Image
          src={bubbles}
          className=" absolute top-[15%] left-[12%] w-[22%] max-w-[160px] object-cover "
          alt="trees"
        />
        <Image
          src={darkfishes}
          className=" absolute top-[17%] left-[45%] w-[22%] max-w-[160px] object-cover "
          alt="trees"
        />
          <Image
            src={flow}
            className=" absolute bottom-0 right-0 min-h-[100px]  w-full object-cover "
            alt="trees"
          />
        <Image
          src={goldfish}
          className=" absolute bottom-[2%] right-[5%] w-[22%] max-w-[160px] object-cover "
          alt="trees"
        />
        
      </div>
      </div>
      {/* ----------main cotent----------------------- */}
      <div className="h-full w-full  maxWidthForSections">
        <EventHero
          about={aboutAbolTabol}
          logo="/AbolTabol/Abol Tabol logo.webp"
          buttonDesign="shadow-white/70 hover:shadow-white/30  bg-[#0212B4] hover:bg-white  hover:text-[#0212B4] text-[#ffff]"
          registeredUiBtn='text-[#0212B4] bg-white'
          planet="/AbolTabol/planet.webp"
          mode="solo"
          name="aboltabol"
        ></EventHero>
      </div>
    </div>
  );
};

export default HeroAT;
