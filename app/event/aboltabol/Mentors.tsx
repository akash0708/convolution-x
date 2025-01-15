import EventJudges from '@/components/EventJudges'
import Image from 'next/image';
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.webp";
import React from 'react'
type Professor = {
  name: string;
  profession: string;
  researchPoint: string;
  img: string; // Image path or imported asset
};

const professors: Professor[] = [
    {
      name: "Sugata Munshi",
      profession:
        "Professor at Department of Electrical Engineering, Jadavpur University",
      researchPoint: "https://scholar.google.com/citations?user=4QDUROsAAAAJ&hl=en",
      img: "sgm.webp", 
    },
    {
      name: "Arabinda Das",
      profession:
        "Professor at Department of Electrical Engineering, Jadavpur University",
      researchPoint: "https://scholar.google.com/citations?user=Oxu-8WcAAAAJ&hl=en",
      img: "ad.webp", 
    },
  ];
const Mentors = () => {
  return (
    <div id="judges" className="relative  py-20">
         <div
        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-tr from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-40"
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
          Meet the Judges and Mentors of Abol Tabol!
        </p>

        <div className="mx-auto flex justify-center mt-6">

      <EventJudges textColor='text-white' professors={professors}></EventJudges>
        </div>
        </div>
    </div>
  )
}

export default Mentors
