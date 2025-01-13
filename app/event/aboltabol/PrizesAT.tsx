import Image from "next/image";
import React from "react";
import gold from "@/assets/images/AbolTabol/gold prize.png";
import silver from "@/assets/images/AbolTabol/silver prize.png";
import bronze from "@/assets/images/AbolTabol/bronze prize.png";
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.png";
import wave1 from "@/assets/images/AbolTabol/layer1 timeline.png";

const PrizesAT = () => {
  return (
    <div id="prizes" className="py-20  relative">
      <div
        className="absolute top-0 left-0 w-full h-full -z-50 bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F]"
      >
        <Image
          src={wavemobile}
          className="block md:hidden absolute  object-cover left-1/2 opacity-30 -translate-x-1/2 -z-20"
          alt="trees"
        />
        <Image
          src={wave1}
          className="hidden md:block absolute   top-0 object-cover left-1/2 opacity-30 -translate-x-1/2 -z-10"
          alt="trees"
        />
      </div>
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

export default PrizesAT;
