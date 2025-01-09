import React from "react";
import gold from "@/assets/images/Decisia/gold prize.png";
import silver from "@/assets/images/Decisia/silver prize.png";
import bronze from "@/assets/images/Decisia/bronze prize.png";
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
import Image from "next/image";
const PrizesDecisia = () => {
  return (
    <div id="prizes" className="py-12  relative">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-t from-[#67C6DD]     
     via-[#2CB1DF] to-[#2CB1DF]"
      ></div>
      {/* <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40   bottom-0 right-0 -z-20"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   bottom-0 right-0 -z-20"
        alt="trees"
      /> */}
      <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Prizes
        </h2>
        {/* -------------------------prizes--------------- */}
        <div className="flex mt-6 justify-center gap-4 items-end">
            {/* ----------------------silvr-----------------/ */}
          <div className="  ">
            <Image
              src={silver}
              alt="gold"
              className="w-[200px] object-cover scale-[0.85]"
            ></Image>
            <div className="bg-white/60 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-4 sm:text-xl text-base">
              <p className="text-center">Stay Tuned!</p>
            </div>
          </div>
            {/* ----------------------gold-----------------/ */}

          <div className="  ">
            <Image
              src={gold}
              alt="gold"
              className="w-[200px] object-cover"
            ></Image>
            <div className="bg-white/60 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-4 sm:text-xl text-base">
              <p className="text-center">Stay Tuned!</p>
            </div>
          </div>
            {/* ----------------------bronze-----------------/ */}

          <div className="  ">
            <Image
              src={bronze}
              alt="gold"
              className="w-[200px] object-cover scale-[0.85]"
            ></Image>
            <div className="bg-white/60 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-4 sm:text-xl text-base">
              <p className="text-center">Stay Tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesDecisia;