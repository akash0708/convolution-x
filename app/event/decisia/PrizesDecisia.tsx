import React from "react";
import gold from "@/assets/images/Decisia/gold prize.webp";
import silver from "@/assets/images/Decisia/silver prize.webp";
import bronze from "@/assets/images/Decisia/bronze prize.webp";
import decisiaBgMobile from '@/assets/images/Decisia/asteroid bg mobile.png'
import decisiaBg from '@/assets/images/Decisia/asteroid bg.png'
import Image from "next/image";
const PrizesDecisia = () => {
  return (
    <div id="prizes" className="py-20  relative">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#981B0B]     
      to-[#D33D18]"
      >
        <Image
        src={decisiaBg}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute opacity-90   top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
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

export default PrizesDecisia;
