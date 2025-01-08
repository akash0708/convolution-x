"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
      const handleToggle = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
      };
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
        

      <div className="flex mt-6  flex-col justify-center sm:p-0 px-2  gap-4 ">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm shadow-md text-white/90 shadow-white/50 rounded-lg"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full text-left sm:p-5 py-[10px] px-4 font-medium rounded-xl   flex items-center justify-between"
                >
                  <p className="sm:text-base text-sm">{faq.question}</p>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openIndex === index ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    openIndex === index
                      ? " opacity-1 max-h-screen"
                      : "opacity-0 max-h-0 "
                  }  transition-all duration-300 ease-in-out `}
                >
                  <div className="sm:px-5 sm:pb-5 px-4 pb-4 pt-0 ">
                    <p className="text-white/80 sm:text-sm text-xs">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default FaqSpark
