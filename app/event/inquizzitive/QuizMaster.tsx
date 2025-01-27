import React from "react";

const QuizMaster = () => {
  return (
    <div id="panelist" className=" py-12 relative  flex items-center  ">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-[#1A0F52]"
      ></div>
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
