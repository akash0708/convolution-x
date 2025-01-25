import React from "react";
import prize1 from "@/assets/images/Frames/prize1.png";
import prize2 from "@/assets/images/Frames/prize2.png";
import bgUp from "@/assets/images/Frames/prizeBgUp.png";
import bgDown from "@/assets/images/Frames/prizeBgDown.png";
import bgMobile from "@/assets/images/Frames/mobileBg.png";
import Image from "next/image";
const PrizesFrames = () => {
  return (
    <div id="prizes" className="py-20  relative">
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-[#1BA0E8] "></div>
      <Image
        src={bgUp}
        alt="hero"
        className="absolute hidden md:block top-0 left-1/2 -translate-x-1/2 -z-10"
      />
      <Image
        src={bgDown}
        alt="hero"
        className="absolute hidden md:block bottom-[-1.2px] left-1/2 -translate-x-1/2 -z-10"
      />
      <Image
        src={bgMobile}
        alt="hero"
        className="absolute md:hidden top-0 w-full object-cover -z-10"
      />

      <div className="maxWidthForSections">
        <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
          Prizes
        </h2>
        {/* -------------------------prizes--------------- */}
        <div className="flex items-center justify-center mt-12  gap-4 sm:gap-8">
          {/* ----------------------gold-----------------/ */}

          <div className=" relative ">
            <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-full left-1/2 -translate-x-1/2 flex items-end -z-10">
              <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-4 sm:py-[20px] sm:text-xl text-base">
                <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
              </div>
            </div>
            <Image
              src={prize1}
              alt="gold"
              className="w-[200px] object-cover"
            ></Image>
            <div className="max-w-[200px] px-2">
              <p className="text-white text-center text-lg sm:text-xl text-shadow-dark my-1">
                Judge&apos;s Choice Winner
              </p>
            </div>
            <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-4 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
            </div>
          </div>

          <div className=" relative ">
            <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-full left-1/2 -translate-x-1/2 flex items-end -z-10">
              <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-4 sm:py-[20px] sm:text-xl text-base">
                <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
              </div>
            </div>
            <Image
              src={prize1}
              alt="gold"
              className="w-[200px] object-cover"
            ></Image>
            <div className="max-w-[200px] px-2">
              <p className="text-white text-center text-lg sm:text-xl text-shadow-dark my-1">
                People&apos;s Choice Winner
              </p>
            </div>
            <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-4 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-12  gap-4 sm:gap-8">
          {/* ----------------------gold-----------------/ */}

          <div className=" relative ">
            <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-full left-1/2 -translate-x-1/2 flex items-end -z-10">
              <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-4 sm:py-[20px] sm:text-xl text-base">
                <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
              </div>
            </div>
            <Image
              src={prize2}
              alt="gold"
              className="w-[200px] object-cover"
            ></Image>
            <div className="max-w-[200px] px-2">
              <p className="text-white text-center text-lg sm:text-xl text-shadow-dark my-1">
                Judge&apos;s Choice Runner Up
              </p>
            </div>
            <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-4 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
            </div>
          </div>

          <div className=" relative ">
            <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-full left-1/2 -translate-x-1/2 flex items-end -z-10">
              <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-4 sm:py-[20px] sm:text-xl text-base">
                <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
              </div>
            </div>
            <Image
              src={prize2}
              alt="gold"
              className="w-[200px] object-cover"
            ></Image>
            <div className="max-w-[200px] px-2">
              <p className="text-white text-center text-lg sm:text-xl text-shadow-dark my-1">
                People&apos;s Choice Runner Up
              </p>
            </div>
            <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-4 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-lg text-base">Stay Tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesFrames;
