import Image from "next/image";
import React from "react";
import timelineMajo from "@/assets/images/JuTalks/timelineMajo.png";
import stripBg from "@/assets/images/JuTalks/stripBg.png";
import cloudTime from "@/assets/images/JuTalks/cloud.png"
import cloud from "@/assets/images/JuTalks/cloud1.png"
const TimelineTalks = () => {
  return (
    <div id="timeline" className="pt-12 relative overflow-hidden">
      <div className="maxWidthForSections ">
        <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
          Timeline
        </h2>
        </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#DDA6BC] via-[#E691B2] 
        via-[#ED7EAA] to-[#CB6990] -z-20"
      >
        <Image src={stripBg} alt="strip bg" className="h-full "></Image>
      </div>
      <Image src={cloudTime} className=" object-cover mx-auto max-w-[500px] w-[80vw]  mt-8 " alt="trees" />
      <Image src={cloud} className="absolute md:block hidden -right-[5%] top-[25%] object-cover mx-auto max-w-[300px] " alt="trees" />
      <Image src={cloud} className="absolute md:block hidden -left-[5%] top-[15%] object-cover mx-auto max-w-[300px] " alt="trees" />
      <Image src={timelineMajo} className=" object-cover    " alt="trees" />
    </div>
  );
};

export default TimelineTalks;
