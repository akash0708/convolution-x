"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
import FaqEvent from '@/components/FaqEvent';
const faqData = [
    {
      question: "What is Convolution?",
      answer: 
        "Convolution is our annual tech fest, where technology, creativity, and innovation come together. It features exciting events, workshops, competitions, and opportunities to showcase talent.",
    },
    {
      question: "When and where is Convolution happening?",
      answer: 
        "Convolution will take place from 20th to 22nd February, 2025 at Department of Electrical Engineering, Jadavpur University. Stay tuned for updates on our website and social media!",
    },
    {
      question: "Who can participate in Convolution?",
      answer: 
        "Convolution is open to students enthusiastic about technology, enrolled in any undergraduate programme.",
    },
    {
      question: "How can I register for Convolution?",
      answer: 
        "Visit our official website [insert link] or contact [insert contact details] for registration details.",
    },
    {
      question: "Is there any registration fee?",
      answer: 
        "No, the registrations for the events are completely free of cost.",
    },
  ];
const FaqSpark = () => {
    
  return (
    <div id='faq' className='min-h-[80vh] relative flex justify-center items-center  '>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-b from-[#2CB1DF] via-[#3AADD9] to-[#67C6DD] 
     -z-20"></div>
 <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40  top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      />
        <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Frequently Asked Questions
        </h2>
        

        <FaqEvent faq={faqData} questionStyle="text-white text-shadow-dark" answerStyle='text-white text-shadow-dark'></FaqEvent>

        </div>
    </div>
  )
}

export default FaqSpark
