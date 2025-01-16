import Image from "next/image";
import React from "react";
import topRight from "@/assets/images/Coming Soon/left Top.png";
import bottomRight from "@/assets/images/Coming Soon/bottom right.png";
import kolBalish from "@/assets/images/Coming Soon/kolBalish.webp";
import whiteStar from "@/assets/images/Coming Soon/middle star.png";
import leftMobile from "@/assets/images/Coming Soon/left top mobile.png";
import rightMobile from "@/assets/images/Coming Soon/bottom right mobile.png";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className=" h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        <div className="bg-gradient-to-tl from-[#3A2184] to-[#1D1558] -z-30  h-full w-full"></div>
        <Image
          src={whiteStar}
          alt="top right"
          className="absolute  object-cover h-full sm:w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></Image>
        <Image
          src={topRight}
          alt="top right"
          className="absolute hidden sm:block top-[-0%] left-[-2%] max-w-[55vw] lg:max-h-[70vh] lg:max-w-min"
        ></Image>

<Image
          src={bottomRight}
          alt="top right"
          className="absolute hidden sm:block bottom-[-0%] right-[-0%] max-w-[65vw]  lg:max-h-[55vh] lg:max-w-min"
        ></Image>
       

{/* ------------mobile--------------- */}
        <Image
          src={rightMobile}
          alt="top right"
          className="absolute object-cover sm:hidden block bottom-[-0%] right-[-10%] max-w-[60vw] min-w-[400px]"
        ></Image>
        <Image
          src={leftMobile}
          alt="top right"
          className="absolute object-cover sm:hidden block top-[0%] left-[0%] max-w-[60vw] min-w-[400px]"
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
