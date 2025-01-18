import FaqEvent from '@/components/FaqEvent'
import Image from 'next/image';
import React from 'react'
import aroura2 from '@/assets/images/Circuistics/aroura2.png'

import decisiaBgMobile from '@/assets/images/Decisia/asteroid bg mobile.png'
import decisiaBg from '@/assets/images/Decisia/asteroid bg.png'
const faqData = [
  {
      question: "Can cross - year or cross - college teams be formed ?",
      answer: 
        "Teams must consist of students from the same academic year since the competition is year-based. However, forming cross-college teams is permitted. This structure ensures a level playing field by minimizing disparities in experience and resources among participants, while also fostering a stronger sense of camaraderie and collaboration within the teams.",
  },
  {
      question: "Will senior participants within a particular Tier have an advantage over others?",
      answer: 
        "No, the competition is designed to be fair and unbiased. The Prelims will have separate question papers for UG1 and UG2. For the Finals, selection will be based on a normalized scoring system and the final problems will be unique for each year. This ensures that all participants, regardless of seniority, have an equal opportunity in the event.For Tier 2 as well, the level of the questions will be such that there will be no disparity in chances of qualifications for UG3 and UG4.",
  },
  {
      question: "What will be the level of questions asked in the Prelims, and what about the Final problem?",
      answer: 
        "The Prelims will feature MCQ and NAT-type questions, with difficulty levels tailored to each respective Tier. The questions will be primarily conceptual and formula-based, mostly of a moderate level of difficulty. For the Finals, participants will need logical and circuit-building skills. Be prepared for an exciting challenge!",
  },
];
  
const FaqCircuistics = () => {
  return (
    <div id='faq' className='min-h-[80vh]  relative flex justify-center items-center '>
        <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-t from-[#24339B]  to-[#1F267E]"
      >
        <Image
        src={aroura2}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute opacity-90   top-[-10%] right-0 -z-10"
        alt="trees"
      />
        <Image
        src={aroura2}
        className=" h-auto animate-twinkle sm:hidden block w-full  absolute opacity-90   top-[-20%] right-0 -z-10"
        alt="trees"
      />
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

export default FaqCircuistics
