import Image from "next/image";
import React from "react";
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import rocket from "@/assets/images/AboutImages/planet and rocket.png";

const HomeAbout = () => {
  return (
    <div id="about" className=" md:min-h-screen flex items-center bg-darkBlue relative  py-8">
      {/* --------------Pink Star Bg------------- */}
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2  animate-twinkle -z-10">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover opacity-0 md:opacity-100 w-full h-full top-0 left-0"
        />
      </div>
      {/* ---------------------the main part ----------------- */}
      <div className="maxWidthForSections h-full flex items-center">
        <div className=" overflow-hidden md:rounded-3xl rounded-2xl w-full bg-aboutGradient  shadow-shadowAbout">
          <div className="md:grid flex flex-col-reverse bg-aboutBg bg-cover bg-right grid-cols-2 lg:px-10 lg:py-16 px-4 py-8 sm:p-8">
            <div className="flex flex-col justify-center">
              <h2 className="md:text-4xl text-3xl text-white font-bold md:text-left text-center">
                About Us
              </h2>
              <p className="md:mt-6 mt-4 tracking-wide lg:text-lg sm:text-base text-sm text-white/80 md:text-left text-center">
                Convolution X is the tenth edition of the annual
                techno-management fest organized by the Students' Forum of the
                Department of Electrical Engineering, Jadavpur University.
                Convolution acts as an umbrella event comprising of several
                student interaction events, technical competitions , workshops,
                and has also hosted, in the past, lectures by some of the most
                illustrious names in academia and industry alike.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={rocket}
                alt="rocket"
                className="object-cover w-[80%]  h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
