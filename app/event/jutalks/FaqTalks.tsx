"use client"

import FaqEvent from '@/components/FaqEvent';

const faqData = [
    {
      question: " What is the objective of JU Talks?",
      answer: 
        " JU Talks seeks to unite industry experts, veterans,  technology specialists in a bid to examine the challenges, pace, and advances that characterize our current environment. Such events facilitate the interaction of ideas, thus allowing the participants to get a different outlook.",
    },
    {
      question: "Who will be the speakers at the event?",
      answer: 
        "Various prominent figures will attend such an occasion, ranging from industrialists, veterans to technology specialists & well known faces from artistic fields. Every speaker would discuss the aspects in a little wider sense by narrating their experiences and opinions.",
    },
    {
      question: "How can the audience participate during JU Talks?",
      answer: 
        "In this podcast method, listeners are expected to  interact with the leaders by asking them questions, expressing confusion, and having meaningful conversations with them. This guarantees a productive and pleasant experience to everyone indeed.",
    },
    {
      question: "Will there be any specified topic?",
      answer: 
        "Yes, a topic will be selected by the event leads related to modern societal issues & our panelists will be giving their valuable insights on that particular subject.",
    },
    
  ];
const FaqTalks = () => {
    
  return (
    <div id='faq' className='py-12 relative flex justify-center items-center  '>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-[#f6a5c1] 
     -z-50"></div>
      


        <div className="maxWidthForSections">
        <h2 className="sm:text-5xl text-3xl mb-8 font-medium text-[#552614] text-center ">
          Frequently Asked Questions
        </h2>
        

        <FaqEvent faq={faqData} questionStyle="text-[#552614]" answerStyle='text-[#552614]'></FaqEvent>

        </div>
    </div>
  )
}

export default FaqTalks
