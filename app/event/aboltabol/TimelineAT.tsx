import React from "react";
import wave from "@/assets/images/AbolTabol/wavesUnderwater.webp";
import wave1 from "@/assets/images/AbolTabol/layer1 timeline.webp";
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.webp";
import Image from "next/image";
const timelineDetails: { date: string; head: string; task: string }[] = [
  {
    date: "8th Feb",
    head: "Abstract Submission starts",
    task: "The fray begins! All registered participants will be submitting a presentation.",
  },
  {
    date: "12th Feb",
    head: "Abstract Submission Ends",
    task: "All abstracts to be submitted by 11:59pm on 12th February.",
  },
  {
    date: "15th Feb",
    head: "Announcing Results of Prelims",
    task: "The top 9 teams will be shortlisted for the final round.",
  },
  {
    date: "21st Feb",
    head: "Final Round",
    task: "The shortlisted teams will have to pitch their concepts before the judges and chief guest.",
  },
];
const TimelineAT = () => {
  return (
    <div id="timeline" className="relative min-h-screen   py-16">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-30"
      >
        <>
          <Image
            src={wave}
            className="hidden md:block absolute lg:w-[full] lg:h-auto h-1/2 top-1/2 object-cover left-1/2 opacity-30 -translate-x-1/2 "
            alt="trees"
          />
          <Image
            src={wave1}
            className="hidden md:block absolute lg:w-[full] lg:h-auto h-1/2 -top-0 object-cover left-1/2 opacity-30 -translate-x-1/2 "
            alt="trees"
          />
          <Image
            src={wavemobile}
            className="block md:hidden absolute  object-cover left-1/2 opacity-30 -translate-x-1/2 "
            alt="trees"
          />
          <Image
            src={wavemobile}
            className="block md:hidden absolute -bottom-1/4 object-cover left-1/2 opacity-30 -translate-x-1/2 "
            alt="trees"
          />
        </>
      </div>
      <div className="maxWidthForSections ">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Timeline
        </h2>
        {/* <div className="flex flex-col gap-6 mt-12">
          {timelineDetails.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex w-full ${index % 2 == 0 ? "justify-end" : ""}`}
              >
                <div
                  className={`bg-white/10 backdrop-blur-sm text-center shadow-lg h-auto sm:w-[45%] w-[65%] px-4 sm:px-8 py-8 rounded-xl text-white flex flex-col  gap-y-2  ${
                    index % 2 == 0 ? "items-start" : "items-end"
                  }`}
                >
                  <h1 className="sm:text-2xl text-xl">{data.date}</h1>
                  <div className="h-1 bg-[#FC9D1D] rounded-full w-[20%] min-w-[100px]"></div>
                  <p
                    className={`text-[#FFBA00] ${
                      index % 2 == 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {data.head}
                  </p>
                  <p
                    className={`${
                      index % 2 == 0 ? "text-left" : "text-right"
                    } sm:text-base text-sm`}
                  >
                    {data.task}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="sm:flex hidden flex-col gap-6 mt-12">
          {timelineDetails.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex w-full relative ${index % 2 == 0 ? "justify-end" : ""}`}
              >
                <div className="absolute size-8 rounded-full bg-white z-10 top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2"></div>
               {index < (timelineDetails.length-1) && <div className="absolute h-full  bg-transparent z-10 top-1/2 -translate-x-1/2 left-1/2 border-l-[5px] border-dashed border-white/80 "></div>}
                <div
                  className={`bg-white/10 backdrop-blur-sm text-center shadow-lg h-auto sm:w-[45%] w-[65%] px-4 sm:px-8 py-8 rounded-xl text-white flex flex-col  gap-y-2  ${
                    index % 2 == 0 ? "items-start" : "items-end"
                  }`}
                >
                  <h1 className="sm:text-2xl text-xl">{data.date}</h1>
                  <div className="h-1 bg-[#FC9D1D] rounded-full w-[20%] min-w-[100px]"></div>
                  <p
                    className={`text-[#FFBA00] ${
                      index % 2 == 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {data.head}
                  </p>
                  <p
                    className={`${
                      index % 2 == 0 ? "text-left" : "text-right"
                    } sm:text-base text-sm`}
                  >
                    {data.task}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
{/* ----------------------for mobile ---------------------- */}
        <div className="flex sm:hidden flex-col gap-6 mt-12">
          {timelineDetails.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex w-full relative ${index % 2 == 0 ? "justify-end" : ""}`}
              >
               {index < (timelineDetails.length-1) && <div className="absolute h-[110%]  bg-transparent z-10 top-1/2 -translate-x-1/2 left-4 border-l-[3px] border-dashed border-white "></div>}
                <div className="absolute size-4 rounded-full bg-[#FC9D1D] z-10 top-1/2 -translate-x-1/2 -translate-y-1/2  left-4"></div>
                <div
                  className={`bg-white/10 backdrop-blur-sm shadow-lg h-auto ml-8 px-4 sm:px-8 py-8 rounded-xl text-white flex flex-col  gap-y-2  `}
                >
                  <h1 className="sm:text-2xl text-xl">{data.date}</h1>
                  <div className="h-1 bg-[#FC9D1D] rounded-full w-[20%] min-w-[100px]"></div>
                  <p
                    className={`text-[#FFBA00] `}
                  >
                    {data.head}
                  </p>
                  <p
                    className={` sm:text-base text-sm`}
                  >
                    {data.task}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default TimelineAT;
