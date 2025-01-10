import React from "react";
import wave from "@/assets/images/AbolTabol/wavesUnderwater.png";
import wave1 from "@/assets/images/AbolTabol/layer1 timeline.png";
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.png";
import Image from "next/image";

const timelineDetails: { date: string; head: string; task: string }[] = [
  {
    date: "15th Feb",
    head: "Abstract Submission starts",
    task: "Abstract Submission Starts- the participants will have to submit an abstract of their business ideas",
  },
  {
    date: "15th Feb",
    head: "Abstract Submission starts",
    task: "Abstract Submission Starts- the participants will have to submit an abstract of their business ideas",
  },
  {
    date: "15th Feb",
    head: "Abstract Submission starts",
    task: "Abstract Submission Starts- the participants will have to submit an abstract of their business ideas",
  },
  {
    date: "15th Feb",
    head: "Abstract Submission starts",
    task: "Abstract Submission Starts- the participants will have to submit an abstract of their business ideas",
  },
];
const TimelineAT = () => {
  return (
    <div id="timeline" className="relative min-h-screen   py-16">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-30"
      >
       
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
      </div>
      <div className="maxWidthForSections ">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Timeline
        </h2>
        <div className="flex flex-col gap-6 mt-12">
          {timelineDetails.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex w-full ${index % 2 == 0 ? "justify-end" : ""}`}
              >
                <div className=""></div>
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
      </div>
    </div>
  );
};

export default TimelineAT;
