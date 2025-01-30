import Image from "next/image";
import React from "react";
import EventJudges from "@/components/EventJudges";
import decisiaBgMobile from '@/assets/images/Circuistics/phone white star bg.png'
import decisiaBg from '@/assets/images/Circuistics/whitestarbg.png'
type Professor = {
  name: string;
  profession: string;
  researchPoint: string;
  img: string; // Image path or imported asset
};

const professors: Professor[] = [
  {
    name: "Palash Kumar Kundu",
    profession:
      "Professor at Department of Electrical Engineering, Jadavpur University",
    researchPoint: "https://www.researchgate.net/profile/Palash-Kundu-5",
    img: "pkk.png", // Replace with the actual image path or import
  },
  {
    name: "Biswendu Chatterjee",
    profession:
      "Professor at Department of Electrical Engineering, Jadavpur University",
    researchPoint: "https://scholar.google.com/citations?user=tglA61sAAAAJ&hl=en",
    img: "bdc.png", // Replace with the actual image path or import
  },
  {
    name: "Dipten Maity",
    profession:
      "Assistant Professor at Department of Electrical Engineering, Jadavpur University",
    researchPoint: "https://scholar.google.co.in/citations?hl=en&user=34JBou8AAAAJ",
    img: "dm.png", // Replace with the actual image path or import
  },
 
];

const Mentors = () => {
  return (
    <div id="judges" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#939FD4]  to-[#2D3488]"
      ></div>
      <Image
        src={decisiaBg}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute opacity-90   top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
        alt="trees"
      />
      <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
        Judges & Mentors
        </h2>
        <p className="opacity-80 text-white text-center mt-2 text-base sm:text-xl font-medium">
          Meet the Judges & Mentors of Circuistics!
        </p>

        <div className="mx-auto flex justify-center mt-6">
          {/* ------------------mentor names---------------- */}
          
          <EventJudges professors={professors} textColor="text-white"></EventJudges>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
