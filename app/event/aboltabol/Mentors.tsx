import EventJudges from '@/components/EventJudges'
import Image from 'next/image';
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.webp";
import React from 'react'
import judge1 from '@/assets/images/AbolTabol/bongshort.png'
import judge2 from '@/assets/images/AbolTabol/sgm.png'
import judge3 from '@/assets/images/AbolTabol/bjb.png'
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
      img: "sgm.png", 
    },
    {
      name: "Arabinda Das",
      profession:
        "Professor at Department of Electrical Engineering, Jadavpur University",
      researchPoint: "https://scholar.google.com/citations?user=Oxu-8WcAAAAJ&hl=en",
      img: "ad.png", 
    },
  ];
  const judges: { name: string; description: string }[] = [
    {
      name: "Subham Chaudhuri",
      description: "Famous content creator, popularly knows as 'Bong Short'",
    },
    {
      name: "Sugata Munshi",
      description: "Professor at Department of Electrical Engineering, Jadavpur University.",
    },
    {
      name: "Biswajit Bhattacharyya",
      description: "Professor at Department of Electrical Engineering, Jadavpur Universit",
    },
    
  ];
const pics = [judge1,judge2,judge3];

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
           Mentors
        </h2>
        <p className="opacity-80 text-white text-center mt-2 text-base sm:text-xl font-medium">
          Meet Mentors of Abol Tabol!
        </p>

        <div className="mx-auto flex justify-center mt-6">

      <EventJudges textColor='text-white' professors={professors}></EventJudges>
        </div>

        {/* --------------------judges-----------------------
         */}
         <h2 className="text-4xl font-medium text-white text-center mt-16">
           Judges
        </h2>
        <p className="opacity-80 text-white text-center mt-2 text-base sm:text-xl font-medium">
          Meet the Judges of Abol Tabol!
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          {judges.map((item, index) => {
                      return (
                        <div
                          key={item.name}
                          className="flex flex-col sm:gap-y-2 gap-y-1 items-center font-sans sm:px-4 sm:py-8 px-2 py-6 text-[#ffff] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop:blur-sm  rounded-2xl w-[270px]"
                        >
                          <div className="overflow-hidden flex items-center rounded-full size-32 ">
                            <Image src={pics[index]} alt="kaku" className=""></Image>
                          </div>
          
                          <h1 className="sm:text-lg text-sm text-center font-semibold">
                            {item.name}{" "}
                          </h1>
                          <p className="text-center sm:text-base text-xs">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
        </div>
        </div>
    </div>
  )
}

export default Mentors
