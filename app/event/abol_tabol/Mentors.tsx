import EventJudges from '@/components/EventJudges'
import Image from 'next/image';
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.png";
import React from 'react'
type Professor = {
  name: string;
  profession: string;
  researchPoint: string;
  img: string; // Image path or imported asset
};

const professors: Professor[] = [
    {
      name: "Debangshu Dey",
      profession:
        "Professor at Department of Electrical Engineering, Jadavpur University",
      researchPoint: "https://scholar.google.com/citations?user=tlzV8CAAAAAJ&hl=en",
      img: "dsd.png", // Replace with the actual image path or import
    },
    {
      name: "Suddhasatwa Chakraborty",
      profession:
        "Professor at Department of Electrical Engineering, Jadavpur University",
      researchPoint: "https://www.researchgate.net/profile/Suddhasatwa-Chakraborty",
      img: "sdc.png", // Replace with the actual image path or import
    },
  ];
const Mentors = () => {
  return (
    <div id="judges" className="relative  py-20">
         <div
        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-tr from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-30"
      >
        <div className="relative">

        <Image
          src={wavemobile}
          className="block md:hidden absolute  object-cover left-1/2 opacity-30 -translate-x-1/2 "
          alt="trees"
        />
        </div>
      </div>
        <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-center ">
          Judges & Mentors
        </h2>
        <p className="opacity-80 text-white text-center mt-2 text-base sm:text-xl font-medium">
          Meet the Judges and Mentors of Sparkhack!
        </p>

        <div className="mx-auto flex justify-center mt-6">

      <EventJudges textColor='text-white' professors={professors}></EventJudges>
        </div>
        </div>
    </div>
  )
}

export default Mentors
