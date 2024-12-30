import React from "react";
import Image from "next/image";
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import centerPlanet from "@/assets/images/HeroSectionImages/bowling ball planet.png";
import rockets from "@/assets/images/HeroSectionImages/rotating rockets.png";
import bluePlanet from "@/assets/images/HeroSectionImages/blue planet.png";
import blueRedPlanet from "@/assets/images/HeroSectionImages/blue-red planet.png";
import pinkBluePlanet from "@/assets/images/HeroSectionImages/pink-blue planet.png";
import yellowBluePlanet from "@/assets/images/HeroSectionImages/yellow planet.png";
import pinkPlanet from "@/assets/images/HeroSectionImages/pink planet.png";
import cloud1 from "@/assets/images/HeroSectionImages/cloud1.png";
import cloud2 from "@/assets/images/HeroSectionImages/cloud2.png";
import ConvoIcon from '@/assets/images/HeroSectionImages/ConvoSvg.svg';

const HomeHero = () => {
  return (
    <div id="home" className=" min-h-[100svh] relative bg-radial-darkBlue-to-purple flex justify-center items-center ">
      {/* --------------------clouds------------- */}
      <div className="">
        {/* --------------left Clouds------------ */}
        <Image
          src={cloud2}
          alt="Rotating Rockets"
          className="absolute top-0 left-0 w-[50vw] h-auto "
        ></Image>
        <Image
          src={cloud1}
          alt="Rotating Rockets"
          className="absolute top-0 left-0 w-[35vw] h-auto "
        ></Image>
        {/* --------------right Clouds------------ */}
        <Image
          src={cloud2}
          alt="Rotating Rockets"
          className="absolute top-0 right-0 w-[50vw] h-auto scale-x-[-1]"
        ></Image>
        <Image
          src={cloud1}
          alt="Rotating Rockets"
          className="absolute top-0 right-0 w-[35vw] h-auto scale-x-[-1]"
        ></Image>{" "}
      </div>

      {/* --------------Pink Star Bg------------- */}
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle, rgba(255, 255, 255, 0.5) 20%, rgba(0, 0, 0, 0.8) 80%)] animate-twinkle">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover w-full h-full top-0 left-0"
        />
      </div>

      {/* ----------------other planets---------- */}
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="relative w-full h-full">
          {/* -----------rightbottom blue planet------------- */}
          <div>
            <Image
              src={bluePlanet}
              alt="Blue Planets"
              className="absolute right-10 sm:block hidden bottom-1/4 animate-float  w-24 object-cover"
            ></Image>
          </div>
          {/* -----------left top blue planet------------- */}
          <div>
            <Image
              src={bluePlanet}
              alt="Rotating Rockets"
              className="absolute sm:left-[25%] left-[10%] sm:top-[12%] top-[20%] animate-spin-slow sm:w-20 w-10 object-cover"
            ></Image>
          </div>
          {/* -----------leftbottom pink planet------------- */}
          <div>
            <Image
              src={pinkPlanet}
              alt="Blue Planets"
              className="absolute sm:block hidden left-[25%] bottom-[5%] animate-spin-slow-ccw  w-16 object-cover"
            ></Image>
          </div>
          {/* -----------right top pink planet------------- */}
          <div>
            <Image
              src={pinkPlanet}
              alt="pink Planet"
              className="absolute right-[27%] top-[10%] animate-float-slow w-12 object-cover"
            ></Image>
          </div>

          {/* -----------leftbottom red-blue planet------------- */}
          <div>
            <Image
              src={blueRedPlanet}
              alt="Blue red Planets"
              className="absolute left-[12%] bottom-[15%] sm:bottom-[32%] animate-float-fast w-20  sm:w-36 object-cover"
            ></Image>
          </div>
          {/* -----------right top yellow blue planet------------- */}
          <div>
            <Image
              src={yellowBluePlanet}
              alt="yellow blue"
              className="absolute right-[-10%] sm:right-[13%] top-[17%] sm:top-[27%] animate-spin-slow w-28 object-cover"
            ></Image>
          </div>

          {/* -----------right bottom pink blue planet------------- */}
          <div>
            <Image
              src={pinkBluePlanet}
              alt="yellow blue"
              className="absolute sm:right-[25%] right-[10%] bottom-[4%] animate-float-medium sm:w-32 w-20 object-cover"
            ></Image>
          </div>


        </div>
      </div>
{/* ---------------the main section ------------------------- */}
<div className="">
      {/* --------------Blur Center planet------------- */}
  
      <Image
        src={centerPlanet}
        alt="Picture pink stars"
        className="absolute w-[57.47vw] object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
      ></Image>

      {/* --------------Center rotating planet------------- */}
      <div className=" w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> 
      <div className="relative">
      <Image
          src={centerPlanet}
          alt="Picture pink stars"
          className="w-[52.47vw] sm:min-w-[600px] min-w-[480px] object-cover animate-spin-slow-ccw"
        ></Image>
        {/* ------------convo logo---------- */}
      <Image
          src={ConvoIcon}
          alt="Convo logo"
          className="object-cover w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></Image>
        
      </div>
      </div>

      {/* --------------Rotating Rockets------------- */}
      <div className="absolute  w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={rockets}
          alt="Rotating Rockets"
          className="w-[30vw]  sm:min-w-[390px]  min-w-[300px] object-cover animate-spin-slow "
        ></Image>
      </div>
</div>
      
    </div>
  );
};

export default HomeHero;
