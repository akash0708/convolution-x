import FaqEvent from '@/components/FaqEvent'
import React from 'react'
const faqData = [
  {
      question: "Will there be any opportunities to showcase interdisciplinary projects?",
      answer: 
        "Indeed, inter-college events often highlight interdisciplinary collaboration and innovation. It's worth inquiring about platforms to showcase projects spanning multiple disciplines, which can be advantageous for students seeking to explore cross-cutting themes and tackle complex challenges. Organizers typically provide details on participation in interdisciplinary showcases within the event program or through designated communication channels.",
  },
  {
      question: "Can we bring prototypes, samples to enhance our pitch presentations?",
      answer: 
        "Participants are encouraged to use prototypes or visual aids to enhance pitch presentations, providing clarity and engagement. However, it's crucial to ensure relevance, seamless integration, and confirmation of logistical requirements for a successful presentation.",
  },
  {
      question: "Are there intellectual property or confidentiality issues to be considered?",
      answer: 
        "Consider IP and confidentiality when sharing plans. Check event organizer agreements for information treatment. Mark materials as confidential and limit information dissemination. Seek legal counsel for IP protection if needed.",
  },
];
  
const FaqDecisia = () => {
  return (
    <div id='faq' className='min-h-[80vh] bg-gradient-to-b from-[#981B0B]     
      to-[#D33D18] relative flex justify-center items-center '>
        <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Frequently Asked Questions
        </h2>
        <FaqEvent faq={faqData} questionStyle="text-white text-shadow-dark" answerStyle='text-white text-shadow-dark'></FaqEvent>
        </div>
      
    </div>
  )
}

export default FaqDecisia
