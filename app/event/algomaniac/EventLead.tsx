import React from "react";
import decisiaBgMobile from "@/assets/images/Algomaniac/starbgMobile.png";
import decisiaBg from "@/assets/images/Algomaniac/star bg.png";
import EventLeadTemplate from "@/components/EventLeadTemplate";
import Image from "next/image";
import line2 from '@/assets/images/Algomaniac/line2.png'


type TeamMember = {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamLead: TeamMember[] = [
  {
    name: "Srijit Chakraborty",
    image: "srijit.png",
    linkedin: "https://www.linkedin.com/in/srijit-chakraborty-164823257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/am_srijit?igsh=MXA0aHlzYWU2c2NhYw==",
    facebook: "",
  },
  {
    name: " Shakya Majumdar",
    image: "shakho.png",
    linkedin:
      "https://www.linkedin.com/in/shakya-majumdar-869a83321/",
    instagram:
      "https://www.instagram.com/_im_shakya_/",
    facebook: "",
  },
];

const EventLead = () => {
  return (
    <div id="team" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-gradient-to-b from-[#C156CE]  to-[#0D30BB]   
      "
      ></div>
       <Image src={line2} alt='Mountain Image'  className='absolute object-contain w-full top-[60%] h- right-0 '/>
      <Image
        src={decisiaBg}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute    top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute  top-0 right-0 -z-10"
        alt="trees"
      />

      <div className="maxWidthForSections">
        <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-white text-shadow-dark mt-2 text-base sm:text-lg font-medium">Meet the event leads of Algomaniac! We are ready to address all your queries.</p>

        

<EventLeadTemplate teamLead={teamLead} textColor='text-white'></EventLeadTemplate>
      </div>
    </div>
  );
};

export default EventLead;
