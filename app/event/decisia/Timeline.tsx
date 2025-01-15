import Image from "next/image";
import React from "react";
import timelineLandscape from "@/assets/images/Decisia/Timeline landscape.webp";
import stone1 from "@/assets/images/Decisia/stone1.webp";
import stone2 from "@/assets/images/Decisia/stone2.webp";
import stone3 from "@/assets/images/Decisia/stone3.webp";
import stone4 from "@/assets/images/Decisia/stone4.webp";
import boy1 from "@/assets/images/Decisia/character.webp";

const timelineDetails: { date: string; task: string }[] = [
  {
    date: "18th Jan",
    task: "Abstract Submission Starts - the participants will have to submit an abstract of their business ideas",
  },
  {
    date: "11th Feb",
    task: "Abstract Submission Ends - Participants will have to submit their abstracts by 11:59pm on 11th February.",
  },
  {
    date: "18th Feb",
    task: "Result Announcement of Prelims - Top 10 teams will be shortlisted for the 2nd round after their online pitching",
  },
  {
    date: "21st Feb",
    task: "Finals - The shortlisted participants will have to pitch their ideas in front of the judges.",
  },
];

const stones = [stone1, stone2, stone3, stone4];

const Timeline = () => {
  return (
    <div id="timeline" className="relative min-h-screen overflow-hidden py-16">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#DE5C00] via-[#77340F] 
    via-[#931308] to-[#5B0804] -z-20"
      ></div>
      <Image
        src={timelineLandscape}
        className=" absolute lg:w-full lg:h-auto h-full top-0 object-cover left-1/2 -translate-x-1/2 -z-10"
        alt="trees"
      />

      <div className="maxWidthForSections ">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Timeline
        </h2>

        {/* --------------------------for desktop-------------------------- */}

        <div className="hidden md:grid  grid-cols-4 mt-12 lg:gap-6 md:gap-2 ">
          {timelineDetails.map((day, index) => {
            return (
              <div
                key={index}
                className="text-center shadow-lg shadow-[#FC9D1D] bg-[#6D0500] px-4 py-6 rounded-xl"
              >
                <h3 className="text-white text-xl font-bold">{day.date}</h3>
                <div className="h-1 bg-[#FC9D1D] rounded-full w-[30%] mx-auto mt-2 mb-4"></div>
                <p className="text-white lg:text-lg md:text-sm">{day.task}</p>
              </div>
            );
          })}
        </div>
        <div className=" hidden md:grid w-full mt-12 grid-cols-4  gap-6">
          <div className="group flex justify-center mt-28 relative  items-end ">
            <div className="w-[80%] min-w-[150px] relative animate-float-slow">
              <Image
                src={stone1}
                alt="floating stone"
                className="w-full object-cover"
              ></Image>
              <Image
                src={boy1}
                alt="floating stone"
                className="absolute hidden transition-all duration-200 group-hover:block -top-[10%] left-1/2 -translate-x-1/2 object-cover w-[50%]"
              ></Image>
            </div>
          </div>
          <div className="group flex justify-center  items-start">
            <div className="w-[75%] min-w-[130px] relative animate-float-slow">
              <Image
                src={stone2}
                alt="floating stone"
                className=" object-cover"
              ></Image>
              <Image
                src={boy1}
                alt="floating stone"
                className="absolute hidden transition-all duration-200 group-hover:block top-[13%] left-1/2 -translate-x-1/2 object-cover w-[50%]"
              ></Image>
            </div>
          </div>
          <div className="group flex justify-center mt-28  items-end">
            <div className="w-[65%] min-w-[100px] animate-float">
              <Image
                src={boy1}
                alt="floating stone"
                className="absolute hidden transition-all duration-200 group-hover:block -top-[15%] left-1/2 -translate-x-1/2 object-cover w-[50%]"
              ></Image>
              <Image
                src={stone3}
                alt="floating stone"
                className=" object-cover"
              ></Image>
            </div>
          </div>
          <div className="group flex justify-center  items-start">
            <div className="w-[80%] min-w-[150px] animate-float-medium delay-500">
              <Image
                src={boy1}
                alt="floating stone"
                className="absolute hidden transition-all duration-200 group-hover:block top-[10%] left-1/2 -translate-x-1/2 object-cover w-[50%]"
              ></Image>
              <Image
                src={stone4}
                alt="floating stone"
                className=" object-cover"
              ></Image>
            </div>
          </div>
        </div>

        {/* -----------------for mobile and tabs----------------- */}
        <div className="md:hidden flex flex-col gap-6 mt-12">
          {timelineDetails.map((day, index) => {
            return (
              <div key={index} className={`flex items-center justify-between ${index % 2==0 ? 'flex-row-reverse' :''}`}>
                <div className="animate-float-slow sm:w-[37vw] w-[45vw] flex items-center"
                style={{ animationDelay: `${(10 * Math.random()).toFixed(3) }s` }} >
                  <Image
                    src={stones[index]}
                    alt="floating stone"
                    className="w-full object-cover"
                  ></Image>
                  
                </div>

                <div className="text-center shadow-lg h-auto w-[45vw] shadow-[#FC9D1D] bg-[#6D0500] px-4 py-6 rounded-xl">
                  <h3 className="text-white  font-bold">{day.date}</h3>
                  <div className="h-1 bg-[#FC9D1D] rounded-full w-[30%] mx-auto mt-2 mb-4"></div>
                  <p className="text-white sm:text-base text-sm">{day.task}</p>
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
