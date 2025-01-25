import Image from "next/image";
import React from "react";

import EventLeadTemplate from "@/components/EventLeadTemplate";
import sparkles from '@/assets/images/JuTalks/sparkles.png'


type TeamMember = {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamLead: TeamMember[] = [
  {
    name: "Arghodeep Roy Choudhury",
    image: "argho.png",
    linkedin: "https://www.linkedin.com/in/arghodeep-roy-choudhury-b63541264/",
    instagram:
      "https://www.instagram.com/_rickroyc?igsh=MWFnNzhrZzdnMzFiaw==",
    facebook: "",
  },
  {
    name: "Soumalya Karmakar",
    image: "soumalo.png",
    linkedin:
      "https://www.linkedin.com/in/soumalya-karmakar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/soumalya_04?igsh=MWo4cWVsOHlsMDB1cA==",
    facebook: "",
  },
];

const EventLead = () => {
  return (
    <div id="team" className="relative  py-20">
      <div
        className="absolute top-0 left-0 w-full h-full -z-40 bg-gradient-to-b from-[#f8bcd0] 
     to-[#f6a5c1] "
      ></div>
      <Image src={sparkles} alt="strip bg" className=" absolute h-screen top-0 left-0 -z-20"></Image>
      
      <div className="maxWidthForSections">
        <h2 className="text-3xl sm:text-5xl font-medium text-[#552614] text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-[#552614] mt-2 text-base sm:text-xl font-medium">Meet the event leads of JU Talks! We are ready to address all your queries.</p>

        
<EventLeadTemplate teamLead={teamLead} textColor='text-[#512416]'></EventLeadTemplate>

      </div>
    </div>
  );
};

export default EventLead;
