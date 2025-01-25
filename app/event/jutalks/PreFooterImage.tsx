import Image from "next/image";
import React from "react";
import sprinkles from '@/assets/images/JuTalks/sprinkles.png'
import sparkles from '@/assets/images/JuTalks/sparkles.png'

// import footerbg from "@/assets/images/Footer/footerImage2.webp";
import milky from "@/assets/images/JuTalks/milkyFalls.png";

const PreFooterImage = () => {
  return (
    <div className="pt-8  relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-[#f6a5c1] -z-20">
      </div>
      <Image src={sprinkles} alt="strip bg" className=" absolute object-cover h-screen bottom-0 left-0 -z-20"></Image>
      <Image src={sparkles} alt="strip bg" className=" absolute h-screen -top-1/2 left-0 -z-20"></Image>

      {/* -----------------rocket svg--------------- */}
      <div className="relative">
        <Image
          src={milky}
          alt="milky"
          className="min-h-[320px] lg:opacity-100 opacity-0"
        />
        <Image
          src={milky}
          alt="milky"
          className="min-h-[320px] object-cover opacity-100 lg:opacity-0 w-auto absolute -bottom-2 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default PreFooterImage;
