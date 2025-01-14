"use client"
import Image from 'next/image';
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
import FaqEvent from '@/components/FaqEvent';
const faqData = [
    {
      question: " Is SparkHack an offline or online event?",
      answer: 
        " Round 1 and 2 are conducted online, with teams submitting presentations and pitching ideas remotely. After the results of Round 2 are released on 17th February, the top 10 teams can build their prototypes remotely from 17th to 20th February. However, to be eligible for prizes, the top 10 teams must present their prototypes offline on 21st February at the Electrical Engineering Department of Jadavpur University.",
    },
    {
      question: " Is coding experience required to participate in SparkHack?",
      answer: 
        "SparkHack welcomes beginners-anyone who is enthusiastic about technology with a zeal for learning to try , learn and contribute.",
    },
    {
      question: "Can a team work on multiple problem statements during SparkHack?",
      answer: 
        "No, each team must choose one problem statement to work on throughout the competition.",
    },
    {
      question: "Are only software-based solutions allowed in SparkHack?",
      answer: 
        "No, both hardware and software-based solutions are allowed. Teams can choose problem statements based on their expertise and interests, whether they involve hardware implementation, software development, or a combination of both.",
    },
    {
      question: "Will the necessary equipment be provided for the offline round?",
      answer: 
        "No, participants must bring their own equipment. Teams working on hardware problem statements are required to bring their own hardware kits, while those working on software problem statements must bring their own laptops.",
    },
    {
      question: "When will registration end",
      answer: 
        "Registration for SparkHack will  end on 10th February at 5:30 PM .",
    },
  ];
const FaqSpark = () => {
    
  return (
    <div id='faq' className='min-h-screen relative flex justify-center items-center  '>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-b from-[#2CB1DF] via-[#3AADD9] to-[#67C6DD] 
     -z-20"></div>
 <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40  top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-full w-auto object-cover  absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      />
        <div className="maxWidthForSections">
        <h2 className="sm:text-5xl text-3xl mb-8 font-medium text-white text-shadow-dark text-center ">
          Frequently Asked Questions
        </h2>
        

        <FaqEvent faq={faqData} questionStyle="text-white text-shadow-dark" answerStyle='text-white text-shadow-dark'></FaqEvent>

        </div>
    </div>
  )
}

export default FaqSpark
