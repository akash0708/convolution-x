import React from "react";
import Image from "next/image";

import aboutbg from '@/assets/images/Decisia/aboutbg.webp'
const rulesDecisia =[
  "The event has no theme in particular. Photos of any theme will be accepted.",
  "Format: JPEG/JPG format",
  "Photo Dimensions: 2×3 / 4×6 / 8×12 (inch)",
  "Max 2 photos are to be submitted (for each participant).",
  "Post-Processing: ALLOWED: Color Correction, Removal of dust, Cropping, Reasonable adjustments to exposure and contrast.",
  "Post-Processing: NOT ALLOWED: Watermarks/Any logo, Borders, Manipulation, Staging or re-enacting events, painting in object details.",
  "Photo size limit: Within 30 MB",
  "Photo manipulation and plagiarism will lead to disqualification.",
  "A caption (in English) is required for the photo, within 25 words, holding 25% weightage during judgment.",
  "A screenshot of the Metadata of your photo is required. Failure to provide one will result in disqualification (considered as plagiarism)."
];
const AboutFrames = () => {
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
        <a href="https://drive.google.com/file/d/1VuQRbYo6fMCprIjqWwuVfH7PQyCCKAOI/view?usp=sharing" target="_blank" className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full bg-[#DE5C00] hover:shadow-[#D11100] hover:bg-[#931308] shadow-white/40 shadow-md text-white  transition-all duration-300 ">
          <p className="     ">Know More</p>
        </a>
      </div>
    </div>
  );
};

export default AboutFrames;
