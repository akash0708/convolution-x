"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface MyComponentProps {
  faq: FaqItem[]; // Array of FAQ items
  questionStyle: string; // Custom text style
  answerStyle: string; // Custom text style
}

const FaqEvent: React.FC<MyComponentProps> = ({ faq, questionStyle,answerStyle }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="flex mt-6 flex-col justify-center sm:p-0 px-2 gap-4">
      {faq.map((faqItem, index) => (
        <div
          key={index}
          className={` backdrop-blur-sm shadow-md  shadow-white/50 rounded-lg`}
        >
          <button
            type="button"
            onClick={() => handleToggle(index)}
            className={` ${questionStyle} ${index==openIndex?`bg-white/30`:`bg-white/10`} w-full text-left sm:p-5 py-[10px] px-4 font-medium rounded-t-xl flex items-center justify-between `}
          >
            <p className={`sm:text-base text-sm`}>{faqItem.question}</p>
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
                ? "opacity-1 max-h-screen"
                : "opacity-0 max-h-0"
            } transition-all duration-300 bg-white/10 ease-in-out`}
          >
            <div className="sm:px-5 sm:py-5 px-4 py-4 ">
              <p className={`sm:text-sm text-xs ${answerStyle}`}>
                {faqItem.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqEvent;
