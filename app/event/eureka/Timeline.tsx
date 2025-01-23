import Image from "next/image";
import React from "react";
import timelineBg from "@/assets/images/Eureka/timelineBg.png";
import timelineBgMobile from "@/assets/images/Eureka/timelineBgMobile.png";
const timelineDetails: { date: string; task: string; head: string }[] = [
  {
    date: "20th Feb",
    head: "Round 1",
    task: "The prelims are scheduled to be conducted offline on 20th February 2025.",
  },
  {
    date: "21st Feb",
    head: "Round 2",
    task: "The finals will take place offline on 21st February 2025.",
  },
];
const Timeline = () => {
  return (
    <div id="timeline" className="relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-[#DFF3BC] -z-30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="maxWidthForSections h-full">
          <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
            Timeline
          </h2>
          <div className="h-[77%] flex items-center justify-center">

          <ul className="flex justify-center gap-6">
            {timelineDetails.map((day, index) => {
              return (
                <li
                  key={day.date + index}
                  className="bg-[#223A32] rounded-2xl text-white w-full max-w-[300px] flex flex-col items-center py-6 px-4 gap-2 "
                >
                  <h1 className="sm:text-xl text-lg">{day.date}</h1>
                  <div className="w-[30%] h-1 rounded-full bg-white"></div>
                  <p className="text-[#86C14D] sm:text-lg text-base">{day.head}</p>
                  <p className="text-center sm:text-base text-sm">{day.task}</p>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
      <Image
        src={timelineBg}
        alt="Mountain Image"
        className=" object-cover top-0 left-0 w-full hidden md:block "
      />
       <Image
        src={timelineBgMobile}
        alt="Mountain Image"
        className=" object-cover top-0 left-0 w-full md:hidden"
      />
    </div>
  );
};

export default Timeline;
