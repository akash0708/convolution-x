import React from "react";
import timeline from "@/assets/images/Timeline/timeline.png";
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import cloud1 from "@/assets/images/HeroSectionImages/cloud1.png";
import cloud2 from "@/assets/images/HeroSectionImages/cloud2.png";

import Image from "next/image";
const Timeline = () => {
  return (
    <div id="timeline" className="min-h-screen pt-12 relative">
      {/* -----------pink stars-------------- */}
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2  animate-twinkle -z-20">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover w-full h-full top-0 left-0"
        />
      </div>
      <div className="">
        {/* --------------left Clouds------------ */}
        <Image
          src={cloud2}
          alt="Rotating Rockets"
          className="absolute z-10 bottom-0 left-0 w-[50vw] h-auto scale-y-[-1]"
        ></Image>
        <Image
          src={cloud1}
          alt="Rotating Rockets"
          className="absolute z-10 bottom-0 left-0 w-[35vw] h-auto scale-y-[-1]"
        ></Image>
        {/* --------------right Clouds------------ */}
        <Image
          src={cloud2}
          alt="Rotating Rockets"
          className="absolute z-10 bottom-0 right-0 w-[50vw] h-auto scale-x-[-1] scale-y-[-1]"
        ></Image>
        <Image
          src={cloud1}
          alt="Rotating Rockets"
          className="absolute z-10 bottom-0 right-0 w-[35vw] h-auto scale-x-[-1] scale-y-[-1]"
        ></Image>{" "}
      </div>
      <div className="absolute bg-darkBlue h-full w-full left-0 top-0 -z-30"></div>
      <h2 className="sm:text-5xl text-3xl text-white text-center sm:mb-12 mb-8">
        Timeline
      </h2>
      <div className="2xl:max-w-[1280px] text-white xl:max-w-[1200px] mx-auto px-0 relative">
        <div className="relative ">
          <Image src={timeline} alt="timeline Image" />
          {/* ------------------dates------------------- */}
          {/* ---------------day 1 morning------------ */}
          <div className="absolute text-left top-0 w-[25%] right-[2%] sm:right-[0%] ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">
              20th February
            </h1>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
             (Morning)
            </h1>
            <div className=""></div>
            <p className="  md:text-2xl sm:text-lg text-[10px]">
            Inauguration
            </p>
            <p className="  md:text-2xl sm:text-lg text-[10px]">
            Eureka (Prelims)
            </p>

            
          </div>
          {/* ---------------day 1evening------------ */}
          <div className="absolute text-right top-[11%] w-[25%] left-[2%] md:left-[0%] ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">
              20th February
            </h1>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
              (Afternoon)
            </h1>
            <div className=""></div>
            <p className="  md:text-2xl sm:text-lg text-[10px]">
            Inquizzitive (Prelims)
            </p>
            <p className=" md:text-2xl sm:text-lg text-[10px]">
            Inquizzitive (Finals)
            </p>
          </div>

          {/* ---------------day 2 morning------------ */}
          <div className="absolute text-left top-[20%] w-[25%] right-[2%] sm:right-[0%] ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">
              21st February
            </h1>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
              (Morning)
            </h1>
            <div className=""></div>
            <p className="  md:text-2xl sm:text-lg text-[10px]">
              Eureka (Finals)
            </p>
            <p className="  md:text-2xl sm:text-lg text-[10px]">
              Sparkhack (Finals)
            </p>

            <p className="  md:text-2xl sm:text-lg text-[10px]">
              Circuistics (Prelims)
            </p>
          </div>
          {/* ---------------day 2evening------------ */}
          <div className="absolute text-right top-[29%] w-[25%] left-[2%] md:left-[0%] ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">
              21st February
            </h1>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
              (Afternoon)
            </h1>
            <div className=""></div>
            <p className=" md:text-2xl sm:text-lg text-[10px]">
            Decisia (Finals)
            </p>
            <p className=" md:text-2xl sm:text-lg text-[10px]">
            Abol Tabol (Finals) 
            </p>
          </div>

          {/* ---------------day 3 morning------------ */}
          <div className="absolute text-left top-[38%] w-[25%] right-[2%] sm:right-[0%] ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">
              22nd February
            </h1>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
               (Morning)
            </h1>
            <div className=""></div>
           
            <p className="  md:text-2xl sm:text-lg text-[10px]">
              Algomaniac (Finals)
            </p>

            <p className="  md:text-2xl sm:text-lg text-[10px]">
              Circuistics (Finals)
            </p>
          </div>
          {/* ---------------day 3 evening------------ */}
          <div className="absolute text-right top-[48%]  w-[25%] left-[2%] md:left-[0%] ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">
              22nd February
            </h1>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
             (Afternoon)
            </h1>
            <div className=""></div>
            <p className=" md:text-2xl sm:text-lg text-[10px]">
            JU Talks
            </p>
            <p className=" md:text-2xl sm:text-lg text-[10px]">
            Closing Ceremony
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Timeline;
