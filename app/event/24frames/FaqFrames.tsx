import FaqEvent from '@/components/FaqEvent';
import Image from 'next/image';
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.webp";
import wave from "@/assets/images/AbolTabol/wavesUnderwater.webp";

import React from 'react'
const faqData = [
  {
      question: "Is there a registration fee to participate in the contest?",
      answer: 
        "No, there is no registration fee. The contest is completely free and open to all students.",
  },
  {
      question: "Can I submit photos taken with a smartphone for the event?",
      answer: 
        "Yes, absolutely! Our photography competition is open to entries captured with any type of camera, including smartphones. We believe that creativity knows no bounds, and stunning images can be produced with a variety of devices.",
  },
  {
      question: "Is there a specific theme for the photography competition?",
      answer: 
        "We encourage diversity and creativity in submissions. There is no specific theme for this competition, allowing photographers to showcase their skills and perspectives across a broad range of subjects. Whether it's portraits, landscapes, abstracts, or street photography, we welcome your unique vision.",
  },
  
];

    
const FaqFrames = () => {
  return (
    <div id='faq' className='min-h-screen  relative flex justify-center items-center '>
        <div
        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-40"
      >
        <div className="relative">
        <Image
          src={wave}
          className="hidden md:block absolute w-[full] lg:h-auto  object-cover left-1/2 opacity-30 -translate-x-1/2 -z-20"
          alt="trees"
        />
        <Image
          src={wavemobile}
          className="block md:hidden absolute  object-cover left-1/2 opacity-30 -translate-x-1/2 "
          alt="trees"
        />
        </div>
      </div>
    <div className="maxWidthForSections">
    <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
      Frequently Asked Questions
    </h2>
    <FaqEvent faq={faqData} questionStyle="text-white text-shadow-dark" answerStyle='text-white text-shadow-dark'></FaqEvent>
    </div>
  
</div>
  )
}

export default FaqFrames
