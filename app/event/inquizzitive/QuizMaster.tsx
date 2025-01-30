import React from "react";
import Image from "next/image";
import texture1 from "@/assets/images/Inquizzitive/texture1.png"

import pixelBox from "@/assets/images/Inquizzitive/pixelBox.png"
const QuizMaster = () => {
  return (
    <div id="quizmaster" className=" py-12 relative  flex items-center  ">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-[#1A0F52]"
      ></div>
       <Image src={texture1} alt='texture' className="absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 max-w-[600px] min-w-[300px]   w-[40vw] object-cover -z-20
      "></Image>
      <Image src={pixelBox} alt="hero" className="absolute top-0 right-[0%] -z-10 object-contain  h-full" />
      <div className="h-full w-full  maxWidthForSections ">
        <h2 className="sm:text-5xl text-2xl font-medium text-white  mb-8 text-center ">
          Quiz Master
        </h2>
        <p className="text-center sm:text-2xl text-lg  text-[#FEB50D]">
          Mystery quizmaster alert—guess if you can!
        </p>
      </div>
    </div>
  );
};

export default QuizMaster;
