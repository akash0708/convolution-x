import Image from "next/image";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { Protest_Riot } from "next/font/google";
import sd from '@/assets/images/Decisia/sd.png'
import partha from '@/assets/images/Decisia/partha.png'
const protestRiot = Protest_Riot({
  subsets: ["latin"], 
  weight: "400", 
});
type Professor = {
  name: string;
  profession: string;
  researchPoint: string;
  img: string; // Image path or imported asset
};

const professors: Professor[] = [
  
 
];

const thisYr: { name: string; description: string }[] = [
  { 
    name: "Prof. Partha Priya Datta",
    description: "Professor at IIM Calcutta.",
  },
  {
    name: "Mr. Shibasis Dutt",
    description: "Managing Director at Nouvelle Automations Pvt. Ltd.",
  },
  
  
];
const pics2 = [partha,sd];

const Judges = () => {
  return (
    <div id="judges" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-gradient-to-b from-[#A7200D]  to-[#981B0B]"
      ></div>
      {/* <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40   bottom-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      /> */}
      <div className="maxWidthForSections">
        <h2 className="text-3xl sm:text-5xl font-medium text-white text-shadow-dark text-center mb-8">
          Judges
        </h2>
        {/* <p className="opacity-80 text-white text-center mt-2 text-base sm:text-xl font-medium">
          Meet the Judges of Decisia!
        </p> */}
        <div className="sm:flex flex-wrap gap-2 grid justify-center grid-cols-2 sm:gap-4">
                  {thisYr.map((item, index) => {
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col sm:gap-y-2 gap-y-1 items-center font-sans sm:px-4 sm:py-8 px-2 py-6 text-[#fff] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop:blur-sm sm:w-[250px] w-auto rounded-2xl"
                      >
                        <div className="overflow-hidden flex items-center rounded-full size-32 ">
                          <Image src={pics2[index]} alt="kaku" className=""></Image>
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

        <div className="mx-auto flex justify-center mt-6">
          {/* ------------------mentor names---------------- */}
          {/* <div
            className={`font-sans flex justify-center flex-col sm:flex-row gap-2 md:gap-x-12`}
          >
            {professors.length>0 && professors.map((professor, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/20 shadow-black/20 shadow-md backdrop-blur-sm flex  py-6 px-4 items-center gap-x-4  sm:max-w-[500px] text-white "
              >
                <Image
                  src={`/MentorJudges/` + professor.img}
                  alt={`${professor.name} image`}
                  className="size-20 sm:size-28 rounded-full shadow-white shadow sm"
                  width={112} // Adjust width
                  height={112} // Adjust height
                />
                <div className="">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold sm:text-base text-sm  ">
                      {professor.name}
                    </h2>
                    <Link target="_blank" href={professor.researchPoint} className="">
                      <FaInfoCircle />
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm ">{professor.profession}</p>
                </div>
              </div>
            ))}
            {professors.length==0 && (
              <p className={`text-white text-xl ${protestRiot.className}`} >To be declared soon ...</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Judges;
