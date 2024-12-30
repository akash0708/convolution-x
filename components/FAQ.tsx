import React from "react";
import colorfulStars from '@/assets/images/faq/colorful stars.png'
import astroGuy from '@/assets/images/faq/cute astroNut.png'
import Image from "next/image";
const faqData = [
  {
    question: "What is the hackathon about?",
    answer: "This hackathon is focused on solving real-world problems using technology."
  },
  {
    question: "Who can participate?",
    answer: "Anyone with a passion for technology and innovation can participate, including students and professionals."
  },
  {
    question: "What are the key dates?",
    answer: "The hackathon will run from January 15th to January 17th, with submissions due by January 16th at midnight."
  },
  {
    question: "Are there any prizes?",
    answer: "Yes, there are exciting prizes for the top three teams and certificates for all participants."
  },
  {
    question: "How do I register?",
    answer: "You can register on our official website by filling out the registration form."
  }
];

const FAQ = () => {
  return (
    <div className=" relative flex items-center  py-16">
      <div className="absolute top-0 w-full h-full -z-10 bg-gradient-to-t  from-[#1E1459]/90 to-darkBlue">
      <div className="animate-twinkle">

      <Image src={colorfulStars} alt="right bg" className="object-cover absolute"/>
      </div>
      </div>
      <div className="maxWidthForSections ">

      <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
      <div className="grid lg:grid-cols-2 gap-4">

{/* -------------the questions---------------------------- */}

      {/* --------variant 1--------------- */}

      <div className=" flex flex-col justify-center gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="collapse  bg-white/10  collapse-arrow backdrop-blur-sm  shadow-md text-white/90 shadow-white/50">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  md:text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content flex items-center">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --------variant 2--------------- */}
      {/* <div className=" flex flex-col  ">
        {faqData.map((faq, index) => (
          <div key={index} className="collapse rounded-none collapse-plus   shadow-md text-white/90 pb-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content flex items-center">
              <p>{faq.answer}</p>
            </div>
            <div className="h-[1px] bg-white w-full rounded-full" ></div>
          </div>
        ))}
      </div> */}

      {/* --------variant 3--------------- */}
      {/* <div className=" flex flex-col  ">
        {faqData.map((faq, index) => (
          <div key={index} className="collapse rounded-md  bg-darkBlue/80 collapse-arrow join-item   shadow-md text-white/90 pb-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content flex items-center">
              <p>{faq.answer}</p>
            </div>
            <div className="h-[1px] bg-white/80 w-full rounded-full" ></div>
          </div>
        ))}
      </div> */}

      {/* -------------right image--------------- */}
      <div className="lg:flex items-center hidden   justify-center">

      <Image src={astroGuy} 
      alt="right bg" 
      
      className=" lg:max-h-[500px] w-full lg:w-auto object-cover animate-float-slow"/>
      </div>

      
      </div>
      </div>
    </div>
  );
};

export default FAQ;
