import React from "react";

import EventLeadTemplate from "@/components/EventLeadTemplate";


type TeamMember = {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamLead: TeamMember[] = [
  {
    name: "Devmalya Ghatak",
    image: "dev.png",
    linkedin: "https://www.linkedin.com/in/devmalya-ghatak-a2299b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/de_ghatak?igsh=MWpyemp4dDVocTVuMw==",
    facebook: "",
  },
  {
    name: " Parijat Majumdar",
    image: "parijat.png",
    linkedin:
      "https://www.linkedin.com/in/parijat-majumdar-4502402ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/_i_am_parijat?utm_source=qr&igsh=cmNvcnRqNmdqaGU1",
    facebook: "https://www.facebook.com/share/1XVGQVRdAg/",
  },
];

const EventLead = () => {
  return (
    <div id="team" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-[#1A0F52]   
      "
      ></div>
       

      <div className="maxWidthForSections">
        <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-white text-shadow-dark mt-2 text-base sm:text-lg font-medium">Meet the event leads of Inquizzitive! We are ready to address all your queries.</p>

        

<EventLeadTemplate teamLead={teamLead} textColor='text-white'></EventLeadTemplate>
      </div>
    </div>
  );
};

export default EventLead;
