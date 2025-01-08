import React from "react";
import Image from "next/image";

import aboutbg from '@/assets/images/Decisia/aboutbg.png'

const AboutDecisia = () => {
  return (
    <div
      id="rules"
      className={`py-12 relative  flex items-center  overflow-hidden  `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#DE5C00] via-[#77340F] 
    via-[#931308] to-[#5B0804] -z-20"
      ></div>
      {/* --------------------------about Image background-------------- */}
      <Image
        src={aboutbg}
        className=" absolute lg:w-full lg:h-auto h-full top-0 object-cover left-1/2 -translate-x-1/2 -z-10"
        alt="trees"
      />
    
      <div className="maxWidthForSections flex flex-col items-center">
        <div
          className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-gradient-to-l from-white/20 to-white/5 backdrop-filter backdrop-blur-sm relative shadow-black/20 shadow-md `}
        >
          
          <h1 className="uppercase text-center text-2xl sm:text-4xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3 list-disc  list-inside text-shadow-dark text-white sm:text-xl text-sm">
            <li>
              A team may consist participants of same or different streams
              and/or same or different years but not from different colleges.
              Teams must comprise 2-4 members.", "The rounds are as follows:
            </li>
            <li>
              The rounds are as follows:
              <ol  style={{ listStyleType: 'lower-alpha' }} className=" ml-6 list-inside">
                <li>
                  Prelims : Online; 2 minutes elevator pitch and 3-5 slides
                  presentation about the B-plan
                </li>
                <li>
                  Finals : Offline
                  <ol className="list-inside ml-6" style={{ listStyleType: 'lower-roman' }}>
                    <li>Full pitch deck has no cap on the number of slides</li>
                    <li>7+3 minutes (Pitch+ QnA) in front of the judges</li>
                    <li>Open Room Pitching</li>
                  </ol>
                </li>
              </ol>
            </li>
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
        <button className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full bg-[#DE5C00] hover:shadow-[#D11100] hover:bg-[#931308] shadow-white/40 shadow-md text-white  transition-all duration-300 ">
          <p className="     ">Know More</p>
        </button>
      </div>
    </div>
  );
};

export default AboutDecisia;
