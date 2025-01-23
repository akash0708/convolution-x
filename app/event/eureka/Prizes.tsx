import React from "react";
import gold from "@/assets/images/Eureka/gold prize.png";
import silver from "@/assets/images/Eureka/silver prize.png";
import bronze from "@/assets/images/Eureka/bronze prize.png";
import leafBg from '@/assets/images/Eureka/leafBg2.png'
import leafBgMobile from '@/assets/images/Eureka/leafBgMobile.png'

import Image from "next/image";
const Prizes = () => {
    return (
        <div id="prizes" className="py-20  relative">
          <div
            className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-t from-[#eda421] to-[#a79f0f] "
          >
           
            <Image
            src={leafBg}
            className=" h-auto hidden sm:block w-full  absolute    top-0 right-0 -z-10"
            alt="trees"
          />
          <Image
            src={leafBgMobile}
            className=" sm:hidden  block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
            alt="trees"
          />
          </div>
          
          <div className="maxWidthForSections">
            <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
              Prizes
            </h2>
            {/* -------------------------prizes--------------- */}
            <div className="flex mt-12 justify-center gap-4 items-end">
                {/* ----------------------silvr-----------------/ */}
              {/* ----------------------silvr-----------------/ */}
              <div className=" relative flex flex-col justify-end">
              <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0  w-[85%] left-1/2 -translate-x-1/2 flex items-end -z-10">
                <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-2 sm:py-[20px] sm:text-xl text-base">
                  <p className="text-center sm:text-lg text-sm">Stay Tuned!</p>
                </div>
                </div>
                <Image
                  src={silver}
                  alt="gold"
                  className="w-[200px] object-cover scale-[0.85]"
                ></Image>
                <p className="text-white text-center text-base sm:text-xl text-shadow-dark">Silver Prize</p>
    
                <div className="bg-white/60 mt-1 opacity-0 backdrop-blur-sm rounded-md py-2 sm:py-[24px] sm:text-xl text-base">
                  <p className="text-center sm:text-lg text-sm">Stay Tuned!</p>
                </div>
              </div>
              {/* ----------------------gold-----------------/ */}
    
              <div className=" relative ">
                <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-[85%] left-1/2 -translate-x-1/2 flex items-end -z-10">
                <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-2 sm:py-[20px] sm:text-xl text-base">
                  <p className="text-center sm:text-lg text-sm">Stay Tuned!</p>
                </div>
                </div>
                <Image
                  src={gold}
                  alt="gold"
                  className="w-[200px] object-cover"
                ></Image>
                <p className="text-white text-center text-base sm:text-xl text-shadow-dark">Gold Prize</p>
                <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-[24px] sm:text-xl text-base">
                  <p className="text-center sm:text-lg text-sm">Stay Tuned!</p>
                </div>
              </div>
              {/* ----------------------bronze-----------------/ */}
    
              <div className=" relative ">
              <div className="absolute bg-gradient-to-br rounded-md shadow-white/80 shadow-lg from-white/10 to-white/20 h-[70%] bottom-0 w-[85%] left-1/2 -translate-x-1/2 flex items-end -z-10">
                <div className="bg-white/60 mt-1 w-full backdrop-blur-sm rounded-b-md py-2 sm:py-[20px] sm:text-xl text-base">
                  <p className="text-center sm:text-lg text-sm">Stay Tuned!</p>
                </div>
                </div>
                <Image
                  src={bronze}
                  alt="gold"
                  className="w-[200px] object-cover scale-[0.85]"
                ></Image>
                <p className="text-white text-center text-base sm:text-xl text-shadow-dark">Bronze Prize</p>
    
                 <div className="bg-white/60 opacity-0 mt-1 backdrop-blur-sm rounded-md py-2 sm:py-[24px] sm:text-xl text-base">
                  <p className="text-center sm:text-lg text-sm">Stay Tuned!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Prizes