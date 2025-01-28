import React from 'react'
import FaqEvent from '@/components/FaqEvent'

const faqData = [
    {
        question: "Are cross-college teams allowed to participate in Inquizzitive?",
        answer: 
          "Yes, it is open to undergraduate and postgraduate students; cross-college and cross-year teams allowed.",
    },
    {
        question: "What is the format of the quiz?",
        answer: 
          "Two rounds: Preliminary Round (top 8 qualify for finals ) and Final Round (top 3 will win cash prizes).",
    },
    {
        question: "When and where will the event be held?",
        answer: 
          "Offline on campus; Preliminary Round starts on 20th February 2025 at 2:30 p.m .Finals will follow the prelims.",
    },
    {
        question: "Will questions be asked only on Electrical Engineering subjects?",
        answer: 
          "No , not at all. It will be a general knowledge quiz competition where your knowledge will be tested.",
    },
   
    
  ];

const FaqQuiz = () => {
    return (
        <div id='faq' className='py-12 relative flex justify-center items-center '>
           
            <div
            className="absolute top-0 left-0 w-full h-full -z-30 bg-[#1A0F52]"
          >
            
          </div>
            <div className="maxWidthForSections">
            <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark mb-8 text-center ">
              Frequently Asked Questions
            </h2>
            <FaqEvent faq={faqData} questionStyle="text-white text-shadow-dark" answerStyle='text-white text-shadow-dark'></FaqEvent>
            </div>
          
        </div>
      )
}

export default FaqQuiz
