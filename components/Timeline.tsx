import React from 'react'
import timeline from '@/assets/images/Timeline/timeline.png'
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import cloud1 from "@/assets/images/HeroSectionImages/cloud1.png";
import cloud2 from "@/assets/images/HeroSectionImages/cloud2.png";

import Image from 'next/image'
const Timeline = () => {
  return (
    <div className='min-h-screen pt-12 relative'>
      {/* -----------pink stars-------------- */}
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2  animate-twinkle -z-20">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover w-full h-full top-0 left-0"
        />
      </div>
       <div className="-z-10">
        {/* --------------left Clouds------------ */}
        <Image
          src={cloud2}
          alt="Rotating Rockets"
          className="absolute bottom-0 left-0 w-[50vw] h-auto scale-y-[-1]"
        ></Image>
        <Image
          src={cloud1}
          alt="Rotating Rockets"
          className="absolute bottom-0 left-0 w-[35vw] h-auto scale-y-[-1]"
        ></Image>
        {/* --------------right Clouds------------ */}
        <Image
          src={cloud2}
          alt="Rotating Rockets"
          className="absolute bottom-0 right-0 w-[50vw] h-auto scale-x-[-1] scale-y-[-1]"
        ></Image>
        <Image
          src={cloud1}
          alt="Rotating Rockets"
          className="absolute bottom-0 right-0 w-[35vw] h-auto scale-x-[-1] scale-y-[-1]"
        ></Image>{" "}
      </div>
      <div className="absolute bg-darkBlue h-full w-full left-0 top-0 -z-30"></div>
      <h2 className="sm:text-5xl text-3xl text-white text-center sm:mb-12 mb-8">
          Timeline
        </h2>
      <div className="2xl:max-w-[1280px] xl:max-w-[1200px] mx-auto px-0">

      <Image src={timeline} alt='timeline Image'/>
      </div>
    </div>
  )
}

export default Timeline
