import React from "react";
import timeline from "@/assets/images/SparkHack/timeline.png";
import noTexttimeline from "@/assets/images/SparkHack/pretimeline-notext.png";

import Image from "next/image";
const Timeline = () => {
  return (
    <div id="timeline" className=" ">
      <div className="2xl:max-w-[1280px] xl:max-w-[1200px] mx-auto px-0">
        <h2 className="text-3xl sm:text-5xl font-medium text-darkBlue pt-8 text-center sm:mt-12 mt-8">
          Timeline
        </h2>
        <div className="relative w-full py-6">
          {/* top right-------------------- */}
          <div className="absolute right-[2%] top-[12%] w-[32%]">
            <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
              21st January
            </h1>
            <p className="text-center md:text-xl sm:text-lg text-[10px]">
              Abstract Submission Begins
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
              Participants can start submitting ppts outlining their chosen
              idea.{" "}
            </p>
          </div>
          {/* ----------------second left--------------- */}
          <div className="absolute left-[2%] top-[27%] w-[23%]">
            <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
              10th February
            </h1>
            <p className="text-center  md:text-xl sm:text-lg text-[10px]">
              Abstract Submission Ends
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
              Participants must submit their abstracts by 11:59 PM.{" "}
            </p>
          </div>

          {/* -----------------third right-------------------- */}
          <div className="absolute right-[3%] top-[35%] w-[30%]">
          <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
              13th February
            </h1>
            <p className="text-center  md:text-xl sm:text-lg text-[10px]">
            Shortlist Announcement
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
            The list of shortlisted teams for the presentation round will be released.
            </p>
          </div>
          {/* ------------------------fourth right-------------------- */}
          <div className="absolute right-[33%] top-[48%] w-[35%]">
          <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
          15th - 16th February
            </h1>
            <p className="text-center  md:text-xl sm:text-lg text-[10px]">
            Online Pitching Round
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
            Shortlisted teams will pitch their ideas to the panel of judges via Google Meet.
            </p>
          </div>

          {/* ------------------------fifth right-------------------- */}
          <div className="absolute right-[33%] top-[65%] w-[35%]">
          <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
          17th February
            </h1>
            <p className="text-center  md:text-xl sm:text-lg text-[10px]">
        Online Pitch Results
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
            Results of the 2nd round will be announced, and the top 10 teams will be shortlisted.
            </p>
          </div>

          {/* ------------------------sixth right-------------------- */}
          <div className="absolute left-[3%] top-[88%] w-[40%]">
          <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
          21st February
            </h1>
            <p className="text-center  md:text-xl sm:text-lg text-[10px]">
            Prototype Submission Round
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
            Top 10 teams will present their prototypes to the judges.
            </p>
          </div>
          {/* ------------------------seventhright-------------------- */}
          <div className="absolute right-[2%] top-[88%] w-[45%]">
          <h1 className="text-black text-center md:text-2xl sm:text-lg text-xs">
          22nd February
            </h1>
            <p className="text-center  md:text-xl sm:text-lg text-[10px]">
            Final Results
            </p>
            <p className="text-[9px] text-black/80 sm:text-base md:text-lg text-center ">
            Winners of the final round will be announced, with the top 3 teams receiving exciting prizes.
            </p>
          </div>

          <Image
            src={noTexttimeline}
            alt="pretimeline"
            className="min-h-[320px] lg:opacity-100  bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
