import Image from "next/image";
import React from "react";
import topRight from "@/assets/images/Coming Soon/right top.webp";
import bottomRight from "@/assets/images/Coming Soon/bottomright.webp";
import kolBalish from "@/assets/images/Coming Soon/kolBalish.webp";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className=" h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        <div className="bg-gradient-to-tl from-[#3A2184] to-[#1D1558] -z-30  h-full w-full"></div>
        <Image
          src={topRight}
          alt="top right"
          className="absolute top-[-10%] left-[-5%]"
        ></Image>
        <Image
          src={bottomRight} 
          alt="top right"
          className="absolute bottom-[-55%] right-[-19%]"
        ></Image>
       
        <div className="w-full  absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex  items-center justify-center sm:flex-row flex-col "> 
        <div className="">

        <Image
          src={kolBalish}
          alt="top right"
          className="w-[250px] object-cover "
        ></Image>
        </div>
        <div className=" flex flex-col items-center gap-4">
        <h1 className="text-center text-white sm:text-6xl text-3xl ">
            Coming Soon...
          </h1>
          <Link href="/">
            <button className="bg-[#FB23D5] rounded-full py-2 w-[150px]  sm:text-lg  shadow-login-home shadow-[#FB23D5] hover:bg-white hover:text-[#FB23D5] hover:shadow-white/80 transition-all duration-300 text-white">
              Go Home
            </button>
          </Link>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
