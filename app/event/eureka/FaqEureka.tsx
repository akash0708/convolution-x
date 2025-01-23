import React from 'react'
import FaqEvent from '@/components/FaqEvent'
import leafBg from '@/assets/images/Eureka/leafBg.png'
import leafBgMobile from '@/assets/images/Eureka/leafBgMobile.png'
import Image from 'next/image';
const faqData = [
    {
        question: "Can we use any AI tools for the  event?",
        answer: 
          " Feel free to utilize any AI tools of your choice for the event. We encourage participants to explore a diverse range of AI tools to enhance their experience and contribute to the innovative atmosphere at the Electrical Engineering Department, Jadavpur University.",
    },
    {
        question: "Will there be any charging points and internet available?",
        answer: 
          "Charging points and internet access will be available for participants at the event. Please remember to bring your own  laptops and chargers to ensure a seamless and productive   experience.",
    },
    {
        question: "Is it mandatory to form a team with students of the same department?",
        answer: 
          "Participation is entirely voluntary, and forming a team is open to  students from any department or college. Embrace the flexibility to collaborate across disciplines and create diverse teams at your convenience. Join us in this non-mandatory opportunity to foster  interdisciplinary connections and showcase your collective talents  at the Electrical Engineering Department, Jadavpur University.",
    },
    {
        question: "Who can participate in this event?",
        answer: 
          "All students, irrespective of their department or college, are invited to participate in this inclusive event. Join for a cross-disciplinary experience, fostering collaboration and knowledge-sharing among students from diverse academic backgrounds.",
    },
    {
        question: " Where will the event be held?",
        answer: 
          "The event will be held on campus at the Electrical Engineering Department, Jadavpur University. It promises to be an insightful gathering, featuring the latest in electrical engineering and opportunities for enriching discussions.",
    },
    
  ];

const FaqEureka = () => {
    return (
        <div id='faq' className='py-12 min-h-screen relative flex justify-center items-center '>
           <Image
            src={leafBg}
            className=" h-auto animate-twinkle hidden sm:block w-full  absolute opacity-40   top-0 right-0 -z-10"
            alt="trees"
          />
          <Image
            src={leafBgMobile}
            className=" sm:hidden  block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
            alt="trees"
          />
            <div
            className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#e98604]     
          to-[#9b2226]"
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

export default FaqEureka
