import React from "react";
import pretimeline from "@/assets/images/SparkHack/preTimeline.webp";
import Image from "next/image";
import flakebg from "@/assets/images/SparkHack/flakeBg.webp";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.webp";

const PreTimeline = () => {
  return (
    <div 
      className="bg-gradient-to-br from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF] flex justify-center  relative overflow-hidden"
    >
      {/* --------------------------flake Images background-------------- */}

      <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40  top-0 right-0 "
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   top-0 right-0 z-10"
        alt="trees"
      />
      <Image
        src={pretimeline}
        alt="pretimeline"
        className="min-h-[320px] top-0 w-full lg:opacity-100 opacity-0 bg-cover"
      />
      <Image
        src={pretimeline}
        alt="pretimeline"
        className="min-h-[320px] opacity-100 lg:opacity-0 bg-cover absolute -bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default PreTimeline;
