import Image from "next/image";
import React from "react";
import topRight from "@/assets/images/Coming Soon/right top.png";
import bottomRight from "@/assets/images/Coming Soon/bottomright.png";
import kolBalish from "@/assets/images/Coming Soon/kolBalish.png";
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
        <Image
          src={kolBalish}
          alt="top right"
          className="w-[600px] object-cover top-1/2 -translate-y-1/2 absolute z-10 left-[10%]"
        ></Image>
      <Link href='/' className="absolute z-20 top-1/2 -translate-y-1/2 right-[30%] flex gap-6 items-center flex-col">
        <h1 className="text-center text-white text-6xl uppercase">Coming Soon...</h1>
        <button className="bg-[#FB23D5] rounded-full py-2 w-[150px]    shadow-login-home shadow-[#FB23D5] hover:bg-white hover:text-[#FB23D5] hover:shadow-white/80 transition-all duration-300 text-white">Go Home</button>
      </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
