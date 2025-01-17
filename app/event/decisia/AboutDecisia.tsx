import React from "react";
import Image from "next/image";

import aboutbg from '@/assets/images/Decisia/aboutbg.webp'
const rulesDecisia = [
  "Teams will register from the official Convolution website with their team name, email, phone no., and college name of each member in the group.",
  "Teams will comprise of 3-5 members (including the team lead).",
  "Teams may consist participants from same or different streams, same or different years,but not from different institutions",
  "Prelims will be held online, where participants have to submit a 2-minute elevator pitch and a presentation with a maximum of 6 slides (preferably in PDF).",
  "Participants can provide an additional executive summary (within 2 slides) of the B-plan.",
  "Finals will be offline (participants can bring prototypes or samples if they want), with a pitching time of 6+3 minutes (pitch + QnA) in front of the judges. (Open room pitching).",
  "Number of teams qualifying for finals: 10 (can change under exceptional circumstances)."
];
const AboutDecisia = () => {
  return (
    <div
      id="rules"
      className={`py-12 relative  flex items-center  overflow-hidden  `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#DE5C00] via-[#77340F] 
    via-[#931308] to-[#5B0804] -z-30"
      ></div>
      {/* --------------------------about Image background-------------- */}
      <Image
        src={aboutbg}
        className=" absolute lg:w-full lg:h-auto h-full top-0 object-cover left-1/2 -translate-x-1/2 -z-10"
        alt="trees"
      />
    
      <div className="maxWidthForSections flex flex-col items-center">
        <div
          className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-gradient-to-l from-black/30 to-black/30 backdrop-filter backdrop-blur-sm relative shadow-black/20 shadow-md `}
        >
          
          <h1 className="uppercase text-center text-2xl sm:text-4xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3  list-disc  list-inside text-shadow-dark text-white sm:text-xl text-sm">
            {rulesDecisia.map((text,index)=>{return (
              <li key={index}>{text}</li>
            )})}
            <li>
              The teams will be evaluated based on:
              <ol className="ml-6 list-inside" style={{ listStyleType: 'lower-alpha' }}>
                <li>Problem Statement</li>
                <li>Solution</li>
                <li>Presentation</li>
              </ol>
            </li>
            <li>
              The teams providing the most meaningful, original and sustainable
              ideas will be awarded prizes.
            </li>
          </ul>
        </div>
        <a href="https://drive.google.com/file/d/15Cc7BM9nDwaqG4300gX9mTT67xYc9Fnf/view?usp=sharing" target="_blank" className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full bg-[#DE5C00] hover:shadow-[#D11100] hover:bg-[#931308] shadow-white/40 shadow-md text-white  transition-all duration-300 ">
          <p className="     ">Know More</p>
        </a>
      </div>
    </div>
  );
};

export default AboutDecisia;
