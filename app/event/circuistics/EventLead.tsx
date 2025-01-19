import React from "react";

import EventLeadTemplate from "@/components/EventLeadTemplate";
import Image from "next/image";
import decisiaBgMobile from '@/assets/images/Circuistics/phone white star bg.png'
import decisiaBg from '@/assets/images/Circuistics/whitestarbg.png'
type TeamMember = {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamLead: TeamMember[] = [
  {
    name: "Aditya Samanta",
    image: "samantha.png",
    linkedin: "https://www.linkedin.com/in/aditya-samanta-05635625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/aditya_samanta04?igsh=bmIwM29lOHZ2bWp6",
    facebook: "https://www.facebook.com/share/1U3T618bQD/",
  },
  {
    name: "Sumedha Ghosh Chowdhury",
    image: "sumedha.png",
    linkedin:
      "https://www.linkedin.com/in/sumedha-ghosh-chowdhury-86437b329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/morn_song/profilecard/?igsh=ODI1Mm93dXVlcHh6",
    facebook: "",
  },
];

const EventLead = () => {
  return (
    <div id="team" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-gradient-to-b from-[#24339B]  to-[#1F267E]"
      ></div>
       <Image
        src={decisiaBg}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute opacity-90   top-0 right-0 -z-10"
        alt="trees"
      />
      
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
        alt="trees"
      />
      <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-white text-shadow-dark mt-2 text-base sm:text-lg font-medium">Meet the event leads of Circuistics! We are ready to address all your queries.</p>

        

<EventLeadTemplate teamLead={teamLead} textColor='text-white'></EventLeadTemplate>
      </div>
    </div>
  );
};

export default EventLead;
