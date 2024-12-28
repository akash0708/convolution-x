import Image from 'next/image'
import React from 'react'
import footerbg from "@/assets/images/Footer/footerImage.png";
import asteroidRinged from "@/assets/images/Footer/asteroid ringed.png";
import deepBluePlanet from "@/assets/images/Footer/deepblue planet.png";
import redBluePlanet from "@/assets/images/Footer/redBlueGradient.png";
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";

const PreFooterImage = () => {
  return (
    <div className='bg-darkBlue overflow-hidden relative'>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-b from-[#0B0E3D]/0 to-darkBlue/80 z-10"></div>
      <Image src={footerbg} alt="rocker launching image" className="w-full " />
      {/* -----------pink star-------- */}
      <div className="absolute  top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2  animate-twinkle z-20">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover w-full  top-1/3 left-0"
        />
      </div>
       {/* ------------------ringed asteroid------------- */}
       <div>
        <Image
          src={asteroidRinged}
          alt="Asteroid"
          className="absolute right-[45%] z-30 bottom-0 animate-float opacity-80  w-40 object-cover"
        ></Image>
      </div>
      {/* ------------------deep blue planet------------- */}
      <div>
        <Image
          src={deepBluePlanet}
          alt="Asteroid"
          className="absolute left-1/2 z-30 top-10 animate-float opacity-80  w-24 object-cover"
        ></Image>
      </div>
      {/* ------------------red blue planet------------- */}
      <div>
        <Image
          src={redBluePlanet}
          alt="Asteroid"
          className="absolute right-10 z-30 top-[40%] animate-float-slow opacity-[0.7]  w-24 object-cover"
        ></Image>
      </div>
    </div>

  )
}

export default PreFooterImage
