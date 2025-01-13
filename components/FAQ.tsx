"use client";
import React, { useState } from "react";
import colorfulStars from "@/assets/images/faq/colorful stars.png";
import astroGuy from "@/assets/images/faq/cute astroNut.png";
import Image from "next/image";
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


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };
  return (
    <div id="faq" className=" relative flex items-center  py-16">
      <div className="absolute top-0 w-full h-full -z-10 bg-gradient-to-t  from-[#1E1459]/90 to-darkBlue">
        <div className="animate-twinkle">
          <Image
            src={colorfulStars}
            alt="right bg"
            className="object-cover absolute"
          />
        </div>
      </div>
      <div className="maxWidthForSections ">
        <h2 className="sm:text-5xl text-3xl  text-white text-center sm:mb-12 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid lg:grid-cols-2 gap-4">
          {/* -------------the questions---------------------------- */}
          <div className="flex flex-col justify-center sm:p-0 px-2  gap-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm shadow-md text-white/90 shadow-white/50 rounded-lg"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className={`${openIndex==index? 'bg-white/10 ' :''} w-full text-left sm:p-5 py-[10px] px-4 font-medium rounded-t-xl   flex items-center justify-between`}
                >
                  <p className="sm:text-lg text-sm">{faq.question}</p>
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
                  <div className="sm:px-5 sm:pb-5 px-4 py-4  ">
                    <p className="text-white/90 sm:text-sm text-xs">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
         

          {/* -------------right image--------------- */}
          <div className="lg:flex items-center hidden   justify-center">
            <Image
              src={astroGuy}
              alt="right bg"
              className="  w-[80%]  object-cover animate-float-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
