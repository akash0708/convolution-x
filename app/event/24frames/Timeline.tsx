import React from "react";
import timeline from "@/assets/images/Frames/timeline.png";
import cloudBottom from "@/assets/images/Frames/cloudBottom.png";
import hotair from "@/assets/images/Frames/hotair.png";
import birds from "@/assets/images/Frames/birds.png";
import sunCloud from "@/assets/images/Frames/sunCloud.png";
import Image from "next/image";
const Timeline = () => {
  return (
    <div id="timeline" className="min-h-screen pt-12 relative">
      <div className="">
        {/* --------------left Clouds------------ */}
        <Image
          src={cloudBottom}
          alt="Rotating Rockets"
          className="absolute z-10 bottom-[-5px] left-0 w-full"
        ></Image>
      </div>
      <div className="absolute bg-[#1BA0E8] h-full w-full left-0 top-0 -z-30"></div>
      <h2 className="sm:text-5xl text-3xl text-white text-center sm:mb-12 mb-8">
        Timeline
      </h2>
      <div className="2xl:max-w-[1280px] text-white xl:max-w-[1200px] mx-auto px-0 relative">
        <div className="relative  pt-8 ">
          <Image src={timeline} alt="timeline Image"  />
          {/* ------------------dates------------------- */}
          <Image src={sunCloud} alt="timeline Image" className="absolute top-0 w-[20%] max-w-[220px] left-[10%] -z-10"  />
          <Image src={birds} alt="timeline Image" className="absolute top-[59%] right-[10%] w-[20%] max-w-[220px] -z-10"  />
          <Image src={hotair} alt="timeline Image" className="absolute top-[20%] right-[2%] w-[20%] max-w-[220px] -z-10"  />

          <div className="absolute right-[8%]  top-[0%] shadow-md shadow-white/20 w-[40%]  bg-white/10 rounded-xl backdrop-blur-md py-4 px-2 sm:px-6 sm:py-8  text-center">
            <h1 className=" md:text-3xl sm:text-lg text-sm">25th January</h1>
            <div className="h-[2px] sm:h-1 w-[50%] bg-white rounded-full mx-auto sm:my-2 my-1"></div>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
              Photograph Submission Starts
            </h1>
          </div>

          <div className="absolute top-[22%]  right-[47%] shadow-md shadow-white/20 w-[40%]  bg-white/10 rounded-xl backdrop-blur-md py-4 px-2 sm:px-6 sm:py-8  text-center ">
            <h1 className=" md:text-3xl sm:text-lg text-sm">12th February</h1>
            <div className="h-[2px] sm:h-1 w-[50%] bg-white rounded-full mx-auto sm:my-2 my-1"></div>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
            Photograph Submission Ends on 12th Feb 11:59 PM
            </h1>
          </div>

          <div className="absolute  sm:top-[40%] top-[38%] right-[5%] shadow-md shadow-white/20 w-[40%]  bg-white/10 rounded-xl backdrop-blur-md py-4 px-2 sm:px-6 sm:py-8  text-center  ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">20th February</h1>
            <div className="h-[2px] sm:h-1 w-[50%] bg-white rounded-full mx-auto sm:my-2 my-1"></div>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
            Voting Period:  20th Feb  - 21st Feb 11:59 PM
            </h1>
          </div>

          <div className="absolute   top-[53%] right-[55%] shadow-md shadow-white/20 w-[40%]  bg-white/10 rounded-xl backdrop-blur-md py-4 px-2 sm:px-6 sm:py-8  text-center  ">
          <h1 className=" md:text-3xl sm:text-lg text-sm">22nd February</h1>
            <div className="h-[2px] sm:h-1 w-[50%] bg-white rounded-full mx-auto sm:my-2 my-1"></div>
            <h1 className=" md:text-3xl sm:text-lg text-xs">
            Results will be declared.
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Timeline;
