import EventLeadTemplate from '@/components/EventLeadTemplate'
import wavemobile from "@/assets/images/AbolTabol/wavesMobile.png";
import wave from "@/assets/images/AbolTabol/wavesUnderwater.png";

import Image from 'next/image';
import React from 'react'
type TeamMember = {
    name: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    image: string;
  };
  
  const teamLead: TeamMember[] = [
    {
      name: "Satrajit Mukherjee",
      image: "satrajit.png",
      linkedin: "https://www.linkedin.com/in/sheetali-maity-1a0724210/",
      instagram:
        "https://www.instagram.com/static.sm/",
      facebook: "",
    },
    {
      name: "Subha Bhattacharya",
      image: "l.png",
      linkedin:
        "https://www.linkedin.com/in/subha-bhattacharya-ab6907250",
      instagram:
        "https://www.instagram.com/subha._bh?igsh=MTBncDNtdGJtMXBvNA==",
      facebook: "",
    },
  ];
const EventLead = () => {
  return (
    <div id="team" className="relative  py-20">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30  bg-gradient-to-tr from-[#0215C5] via-[#020F92] 
     to-[#010A5F]"
      >
        <Image
          src={wavemobile}
          className="block md:hidden absolute -bottom-1/4 object-cover left-1/2 opacity-30 -z-20 -translate-x-1/2 "
          alt="trees"
        />
        <Image
          src={wave}
          className="hidden md:block absolute w-[full]   top-0 object-cover left-1/2 opacity-30 -translate-x-1/2 "
          alt="trees"
        />
      </div>
      <div className="maxWidthForSections">
        <h2 className="text-4xl font-medium text-white text-shadow-dark text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-white text-shadow-dark mt-2 text-base sm:text-lg font-medium">Meet the event leads of Abol Tabol! We are ready to address all your queries.</p>
        <EventLeadTemplate teamLead={teamLead} textColor='text-white'></EventLeadTemplate>
        </div>
      </div>
  )
}

export default EventLead
