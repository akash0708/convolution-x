import Image from "next/image";
import React from "react";
import prefooter from "@/assets/images/AbolTabol/prefooterImage.png";
import darkfishes from "@/assets/images/AbolTabol/darkfishes.webp";
import bluefishes from "@/assets/images/AbolTabol/bluefishes.webp";

const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
      <div
        className="absolute top-0 bottom-0 left-0  w-full  bg-gradient-to-tr from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-[62]"
      ></div>
      <div className="relative">
        <Image
          src={prefooter}
          alt="preefooter ship"
          className="min-h-[320px] w-full  lg:opacity-100 opacity-0"
        ></Image>
        <Image
          src={prefooter}
          alt="preefooter ship"
          className="min-h-[320px] opacity-100 lg:opacity-0 w-auto absolute -bottom-2 left-1/2 -translate-x-1/2 "
        ></Image>
        <Image
          src={darkfishes}
          className=" absolute top-[10%] right-[2%] w-[22%] max-w-[160px] object-cover "
          alt="trees"
        />
        <Image
        src={bluefishes}
        className=" absolute top-[0%] left-[30%] w-[22%] max-w-[160px] object-cover "
        alt="trees"
      />
      </div>
    </div>
  );
};

export default PreFooter;
