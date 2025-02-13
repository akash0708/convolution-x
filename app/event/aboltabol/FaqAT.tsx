import FaqEvent from '@/components/FaqEvent';
import Image from 'next/image';
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.webp";
import wave from "@/assets/images/AbolTabol/wavesUnderwater.webp";

import React from 'react'
const faqData = [
  {
      question: "What makes Abol Tabol suitable for students from different fields?",
      answer: 
        "Abol Tabol is designed as a multidisciplinary platform that celebrates the diversity of student interests. The show's content is carefully curated to include a broad spectrum of topics, ensuring that whether you're studying sciences, humanities, arts, engineering, or any other field, there's something intriguing and entertaining for everyone. Abol Tabol creates a space where the intersections of different disciplines lead to unexpected and delightful intellectual hilarity.",
  },
  {
      question: "What types of hypotheses are accepted at Abol Tabol?",
      answer: 
        "We welcome hypotheses from all fields of science, ranging from physics and biology to psychology and beyond. The only requirement is that your hypothesis is both scientifically plausible and hilariously absurd!",
  },
  {
      question: "Do I need to be a science major to participate in Abol Tabol?",
      answer: 
        "Not at all! Abol Tabol thrives on the rich tapestry of ideas that students from various majors bring to the table. Whether you're majoring in a scientific discipline or pursuing studies in the arts, humanities, or social sciences, your unique perspective is valued. The show is a fantastic opportunity to explore the humorous side of your field or even playfully venture into the realms of other disciplines.",
  },
  {
      question: "How can student participants contribute their ideas to the show?",
      answer: 
        "Students can actively engage with Abol Tabol by submitting their whimsical and imaginative ideas related to their respective fields. This can take various forms, such as crafting stand-up comedy routines, creating humorous sketches, or exploring comedic perspectives on specific topics within their majors. The emphasis is on embracing creativity and showcasing the lighter side of intellectual pursuits, fostering a sense of community and shared laughter.",
  },
];

    
const FaqAT = () => {
  return (
    <div id='faq' className='min-h-screen  relative flex justify-center items-center '>
        <div
        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-[61]"
      >
        <div className="relative">
        {/* <Image
          src={wave}
          className="hidden md:block absolute w-[full] lg:h-auto  object-cover left-1/2 opacity-30 -translate-x-1/2 -z-20"
          alt="trees"
        /> */}
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

export default FaqAT
