import FaqEvent from '@/components/FaqEvent'
import Image from 'next/image';
import React from 'react'
import decisiaBgMobile from '@/assets/images/Decisia/asteroid bg mobile.png'
import decisiaBg from '@/assets/images/Decisia/asteroid bg.png'

const faqData = [
    {
        question: "How will the finalists be chosen?",
        answer: 
          " The participants of the Prelims will be ordered by their total score, with ties broken by time taken to solve. Top 20 participants in the leaderboard will be selected for the Finals.",
    },
    {
        question: "When and where will the finals be held?",
        answer: 
          "The final round is set for February 22, 2024 (Sunday) at the Central Computer Laboratory, Department of Electrical Engineering, Jadavpur University. Please plan your travel accordingly, and on-site parking will be available for your convenience. Looking forward to a successful event!",
    },
    {
        question: "Will I have to carry a laptop for the final round?",
        answer: 
          "Finalists are requested to carry their own laptops. Additionally, participants are also encouraged to ensure that their laptops are equipped with the necessary software and configurations for the competition. Please be advised to bring any specific peripherals or adapters that may be required for your devices.",
    },
    
  ];

const FaqAlgo = () => {
    return (
        <div id='faq' className='py-12  relative flex justify-center items-center '>
            <div
            className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#0D30BB]     
          to-[#2C1071]"
          >
            {/* <Image
            src={decisiaBg}
            className=" h-auto animate-twinkle hidden sm:block w-full  absolute opacity-90   top-0 right-0 -z-10"
            alt="trees"
          />
          <Image
            src={decisiaBgMobile}
            className=" sm:hidden animate-twinkle block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
            alt="trees"
          /> */}
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

export default FaqAlgo
