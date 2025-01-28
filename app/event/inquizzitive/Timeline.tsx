import React from "react";
import Image from "next/image";
import belt from "@/assets/images/Inquizzitive/belt.png";
import crane from "@/assets/images/Inquizzitive/crane.png";
import timelineBg from '@/assets/images/Inquizzitive/timelineBg.png'
// const faqDetails = [
//   { day: "20th February", task: "Prelims will start from 02:30pm." },
//   { day: "20th February", task: "Finals will follow the Prelims." },
// ];
// const imgWidth = 60;
const Timeline = () => {
  return (
    <div
      id="timeline"
      className={`py-12 relative   `}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#1A0F52] -z-30"></div>
      <div className="maxWidthForSections  flex flex-col items-center">
        <h1 className="text-center text-3xl  sm:text-5xl mb-8 text-white text-shadow-dark">
          Timeline
        </h1>
        {/* <div className="flex items-end  mt-12 md:mt-6 w-full">
          <div
            className={`flex flex-col items-center  ${
              `w-` + 1.208 * imgWidth + `vw `
            }`}
          >
            <div className="grid grid-cols-2 sm:gap-x-4 gap-x-2 mb-1 px-2">
              {faqDetails.map((event, index) => {
                return (
                  <div
                    key={event.day + index}
                    className="bg-[#E9A128] sm:min-h-[130px]   sm:py-6 sm:px-4 p-2 py-4 rounded-md text-center flex flex-col justify-start text-darkBlue"
                  >
                    <h1 className="sm:text-xl text-lg">{event.day}</h1>
                    <div className="w-[40%] mx-auto h-1 my-1 rounded-full bg-darkBlue"></div>
                    <p className="text-center sm:text-base text-sm">
                      {event.task}
                    </p>
                  </div>
                );
              })}
            </div>
            <Image
              src={belt}
              alt="iceberg"
              className={`mx-auto   object-cover z-20`}
            ></Image>
          </div>
          <div className={` ${`w-` + imgWidth}vw md:block hidden`}>
            <Image
              src={crane}
              alt="iceberg"
              className=" w-full  object-cover "
            ></Image>
          </div>
        </div> */}


      </div>
        <Image src={timelineBg} alt='timelinebg' className="mt-8 min-h-[350px] object-cover mx-auto"></Image>
    </div>
  );
};

export default Timeline;
