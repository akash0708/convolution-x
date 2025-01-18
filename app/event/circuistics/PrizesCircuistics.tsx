import React from "react";
import gold from "@/assets/images/Circuistics/gold prize.png";
import silver from "@/assets/images/Circuistics/silver prize.png";
import bronze from "@/assets/images/Circuistics/bronze prize.png";

import aroura from '@/assets/images/Circuistics/aroura.png'

import Image from "next/image";

const PrizesCircuistics = () => {
  return (
    <div id="prizes" className="py-20  relative">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#2D3488] to-[#24339B]  "
      >
        <Image
        src={aroura}
        className=" h-auto animate-twinkle  w-full hidden sm:block  absolute opacity-90   top-[-10%] right-0 -z-10"
        alt="trees"
      />
       <Image
        src={aroura}
        className=" h-auto animate-twinkle sm:hidden  w-full  absolute opacity-90   top-3/4 right-0 -z-10"
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
}

export default PrizesCircuistics
