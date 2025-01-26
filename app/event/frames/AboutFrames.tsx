import React from "react";
import Image from "next/image";

import aboutbg from '@/assets/images/Frames/rules.png'
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
        className="absolute top-0 left-0 w-full h-full bg-[#1BA0E8] -z-30"
      >
        <Image src={aboutbg} alt="map" className="absolute top-0 left-1/2 -translate-x-1/2 opacity-90 h-full max-w-none object-contain" />
      </div>
      {/* --------------------------about Image background-------------- */}
     
    
      <div className="maxWidthForSections flex flex-col items-center">
        <div
          className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-black/20 backdrop-filter backdrop-blur-sm relative shadow-white/20 shadow-md `}
        >
          
          <h1 className="uppercase text-center text-2xl sm:text-4xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3  list-disc  list-inside text-shadow-dark text-white sm:text-xl text-sm">
            {rulesDecisia.map((text,index)=>{return (
              <li key={index}>{text}</li>
            )})}
           
          </ul>
        </div>
        <a href="https://drive.google.com/file/d/1Cdy-Rf26dAwwKbE_Jh-4jcUJdETNZajv/view" target="_blank" className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full hover:bg-[#ffff] text-[#1BA0E8]  shadow-[#ffff] hover:shadow-[#fff]/90 bg-white hover:opacity-80  transition-all duration-300 ">
          <p className="     ">Know More</p>
        </a>
      </div>
    </div>
  );
};

export default AboutFrames;
