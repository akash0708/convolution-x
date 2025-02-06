import React from "react";
import gold from "@/assets/images/Circuistics/gold prize.png";
import silver from "@/assets/images/Circuistics/silver prize.png";
import bronze from "@/assets/images/Circuistics/bronze prize.png";

import aroura from "@/assets/images/Circuistics/aroura.png";

import Image from "next/image";

const PrizesCircuistics = () => {
  return (
    <div id="prizes" className="py-20  relative">
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#2D3488] to-[#24339B]  ">
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
          <div className=" relative flex flex-col justify-end">
          <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0  w-[85%] left-1/2 -translate-x-1/2 flex items-end -z-10">
            <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-2 sm:py-[20px] sm:text-xl text-base">
              <p className="text-center sm:text-xl text-base">₹ 7000</p>
            </div>
            </div>
            <Image
              src={silver}
              alt="gold"
              className="w-[200px] object-cover scale-[0.85]"
            ></Image>
            <p className="text-white text-center text-base sm:text-xl text-shadow-dark">Silver Prize</p>

            <div className="bg-white/60 mt-1 opacity-0 backdrop-blur-sm rounded-md py-2 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-xl text-base">₹ 7000</p>
            </div>
          </div>
          {/* ----------------------gold-----------------/ */}

          <div className=" relative ">
            <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-[85%] left-1/2 -translate-x-1/2 flex items-end -z-10">
            <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-2 sm:py-[20px] sm:text-xl text-base">
              <p className="text-center sm:text-xl text-base">₹ 10,000</p>
            </div>
            </div>
            <Image
              src={gold}
              alt="gold"
              className="w-[200px] object-cover"
            ></Image>
            <p className="text-white text-center text-base sm:text-xl text-shadow-dark">Gold Prize</p>
            <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-xl text-base">₹ 10,000</p>
            </div>
          </div>
          {/* ----------------------bronze-----------------/ */}

          <div className=" relative ">
          <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-[85%] left-1/2 -translate-x-1/2 flex items-end -z-10">
            <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-2 sm:py-[20px] sm:text-xl text-base">
              <p className="text-center sm:text-xl text-base">₹ 4000</p>
            </div>
            </div>
            <Image
              src={bronze}
              alt="gold"
              className="w-[200px] object-cover scale-[0.85]"
            ></Image>
            <p className="text-white text-center text-base sm:text-xl text-shadow-dark">Bronze Prize</p>

             <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-[24px] sm:text-xl text-base">
              <p className="text-center sm:text-xl text-base">₹ 4000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesCircuistics;
