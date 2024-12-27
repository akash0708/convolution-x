import Image from "next/image";
import React from "react";
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import rocket from "@/assets/images/AboutImages/planet and rocket.png";

const HomeAbout = () => {
  return (
    <div id="about" className="h-screen bg-darkBlue relative  py-8">
      {/* --------------Pink Star Bg------------- */}
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2  animate-twinkle">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover w-full h-full top-0 left-0"
        />
      </div>
      <div className="maxWidthForSections overflow-hidden rounded-3xl w-full bg-aboutGradient  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-shadowAbout">
        <div className="grid bg-aboutBg bg-cover bg-right grid-cols-2 px-10 py-16">
        <div className="flex flex-col justify-center">
           <h2 className="text-5xl text-white font-mono">About Us</h2>
           <p className="mt-6 tracking-wide text-lg text-white/80">Convolution 10.0 is the tenth edition of the annual techno-management fest organized by the Students' Forum of the Department of Electrical Engineering, Jadavpur University. Convolution acts as an umbrella event comprising of several student interaction events, technical competitions , workshops, and has also hosted, in the past, lectures by some of the most illustrious names in academia and industry alike.</p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={rocket}
              alt="rocket"
              className="object-cover w-[90%] h-auto "
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
