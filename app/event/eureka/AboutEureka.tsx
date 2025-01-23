import React from "react";
import Image from "next/image";

import aboutbg from '@/assets/images/Eureka/AboutBg.png'
const rulesDecisia = [
    "Each team must comprise 3-4 members (including the Team Lead) from the same or different colleges and/or streams.",
  "There will be two rounds: the Screening Round and the Final Round.",
  "Screening Round: This round will test teams on mathematical, analytical and aptitude skills. It will be an on-site pen-and-paper test.",
  "Teams will have 60 questions to answer in 50 minutes. The top 10 teams will be selected for the on-site Final Round.",
  "Final Round: This round will primarily be hosted on the Eureka website. Teams will embark on an adventurous journey involving code-breaking, clue-finding, logical challenges and brainstorming activities.",
  "The Final Round will consist of 5 steps with 3 riddles per step. There may also be a surprise hurdle to solve before declaring the final winner.",
  "Teams will be entitled to 3 hints in total, applicable to individual riddles, but limited to 1 hint per step.",
  "For the Final Round, contestants must bring at least one laptop per team (mandatory). The use of mobile phones and tablets are allowed.",
  "Participants are allowed to browse the internet or use any software program or AI tool to solve the puzzles in the Finals.",
  ];
const AboutEureka = () => {
    return (
        <div
          id="rules"
          className={`min-h-screen py-8 relative  flex items-center  overflow-hidden  `}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#98B643] -z-30"
          ></div>
          {/* --------------------------about Image background-------------- */}
          <Image
            src={aboutbg}
            className=" absolute lg:w-full lg:h-auto h-full bottom-0 object-cover left-1/2 -translate-x-1/2 -z-10"
            alt="trees"
          />
           
          <div className="maxWidthForSections flex flex-col items-center">
            <div
              className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-[#223A32]/30 backdrop-filter backdrop-blur-sm relative shadow-white/30 shadow-md `}
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
            <a href="https://drive.google.com/file/d/1vBIPv722REiEFX-PWcn_ogniDU4wACJt/view" target="_blank" className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full shadow-white/70 hover:shadow-white/30  hover:bg-[#1C971C] bg-[#115211]   text-[#ffffff]  transition-all duration-300 ">
          <p >Know More</p>
        </a>
          </div>
        </div>
      );
}

export default AboutEureka
