import Image from "next/image";
import React from "react";
import stone1 from "@/assets/images/Circuistics/stone1.png";
import stone2 from "@/assets/images/Circuistics/stone2.png";
import stone3 from "@/assets/images/Circuistics/stone3.png";
import flakebg from "@/assets/images/Circuistics/whitestarbg.png";
import flakebgMobile from "@/assets/images/Circuistics/phone white star bg.png";

const timelineDetails: { date: string; task: string,head:string }[] = [
    {
        date: "18th Feb",
        head: "Registrations close",
        task: "Registrations close for Circuistics and you start prepping for the D - day !",
      },
      {
        date: "21st Feb",
        head: "Prelims",
        task: "The participants will be tested on their theoretical knowledge of electronics to qualify for the next round",
      },
      {
        date: "22nd Feb",
        head: "Finals",
        task: "The finalists will have to build a fully functional circuit from scratch according to the provided problem statement.",
      },
  
];

const stones = [stone1, stone2, stone3];

const Timeline = () => {
  return (
    <div id="timeline" className="relative min-h-screen overflow-hidden py-16">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#3122B1] to-[#150E4B] -z-20"
      ></div>
      <Image
            src={flakebg}
            className=" h-auto hidden sm:block w-full  absolute opacity-90 object-cover  top-0 right-0 -z-10"
            alt="trees"
          />
           {/* <Image
            src={flakebg}
            className=" h-auto hidden sm:block w-full  absolute opacity-90 object-cover  bottom-0 right-0 -z-10"
            alt="trees"
          /> */}
          <Image
            src={flakebgMobile}
            className=" sm:hidden block h-full  object-cover absolute opacity-90   bottom-0 right-0 -z-10"
            alt="trees"
          />

      <div className="maxWidthForSections ">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Timeline
        </h2>

        {/* -----------------for mobile and tabs----------------- */}
        <div className="flex flex-col gap-6 mt-12">
          {timelineDetails.map((day, index) => {
            return (
              <div key={index} className={`flex gap-4  items-center justify-evenly ${index % 2==0 ? 'flex-row-reverse' :''}`}>
                <div className="animate-float-slow flex items-center"
                style={{ animationDelay: `${(10 * Math.random()).toFixed(3) }s` }} >
                  <Image
                    src={stones[index]}
                    alt="floating stone"
                    className="w-full max-w-[350px] min-w-[150px] object-cover"
                  ></Image>
                  
                </div>

                <div className={`shadow-lg max-w-[400px] shadow-white/10 bg-white/10 backdrop-blur-sm px-4 py-6 sm:py-8 sm:px-6 rounded-xl flex flex-col    ${
                    index % 2 != 0 ? "items-start text-left" : "text-right items-end"
                  }`}>
                  <h3 className="text-white text-lg sm:text-xl">{day.date}</h3>
                  <div className="h-1 bg-white rounded-full w-[45%]  mt-2 "></div>
                  <p className="text-[#E485D7] sm:text-xl my-2" >{day.head}</p>
                  <p className="text-white sm:text-lg text-xs">{day.task}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
