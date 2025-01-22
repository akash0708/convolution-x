import React from "react";
import Image from "next/image";

import aboutbg from '@/assets/images/Algomaniac/portalBg.png'
import aboutbgMobile from '@/assets/images/Algomaniac/portalMobile.png'
const rulesDecisia = [
    "This is a competitive programming event.",
    "There will be two rounds: Prelims and Finals.",
    "Prelims will be conducted online on 17th February.",
    "Top 20 participants will be selected for the on-site Finals.",
    "Individual participation in both rounds (no teams).",
    "Lab computers will be available in the finals, but finalists are requested to carry laptops as backup.",
    "There will be 5-6 questions of varying difficulty in each round, with a time limit of 2 hours.",
    "Score per question will be based on difficulty, with ties between participants broken by time taken to solve.",
    "Both rounds will be conducted on Hackerrank."
  ]
  ;
const AboutAlgomaniac = () => {
  return (
    <div
      id="rules"
      className={`py-12 relative  flex items-center  overflow-hidden  `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#0D30BB] to-[#041550] -z-30"
      ></div>
      {/* --------------------------about Image background-------------- */}
      <Image
        src={aboutbg}
        className=" absolute lg:w-full lg:h-auto  bottom-0 object-cover left-1/2 -translate-x-1/2 -z-10 hidden md:block"
        alt="trees"
      />
       <Image
        src={aboutbgMobile}
        className=" absolute md:hidden block bottom-0 object-cover left-1/2 min-h-[350px] -translate-x-1/2 -z-10"
        alt="trees"
      />
    
      <div className="maxWidthForSections flex flex-col items-center">
        <div
          className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-gradient-to-l from-white/20 to-white/10 backdrop-filter backdrop-blur-sm relative shadow-black/20 shadow-md `}
        >
          
          <h1 className="uppercase text-center text-2xl sm:text-5xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3  list-disc  list-inside text-shadow-dark text-white sm:text-xl text-sm">
            {rulesDecisia.map((text,index)=>{return (
              <li key={index}>{text}</li>
            )})}
           
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default AboutAlgomaniac;
