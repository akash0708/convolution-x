import React from "react";
import EventLeadTemplate from "@/components/EventLeadTemplate";
import Image from "next/image";
import bgUp from "@/assets/images/Frames/prizeBgUp.png";
import bgDown from "@/assets/images/Frames/prizeBgDown.png";
import bgMobile from "@/assets/images/Frames/mobileBg.png";

type TeamMember = {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamLead: TeamMember[] = [
  {
    name: "Gourav Das",
    image: "gourav.png",
    linkedin: "https://www.linkedin.com/in/gourav-das-103a6424a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/stretched_stringup?igsh=enZlNDUzaTNtZnlk",
    facebook: "https://www.facebook.com/share/18sDmRmvzY/",
  },
  {
    name: "Prattay Barua",
    image: "pratty.png",
    linkedin:
      "https://in.linkedin.com/in/prattay-barua-240081302",
    instagram:
      "https://www.instagram.com/pratt.exe?igsh=MTBsZm0wbXV4bjF1aQ==",
    facebook: "",
  },
];

const EventLead = () => {
  return (
    <div id="team" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-[#1BA0E8]"
      ></div>
      <Image
        src={bgDown}
        alt="hero"
        className="absolute hidden md:block top-0 left-1/2 -translate-x-1/2 -scale-y-100 -z-10"
      />
      <Image
        src={bgUp}
        alt="hero"
        className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 -scale-y-100 -z-10"
      />
       <Image
        src={bgMobile}
        alt="hero"
        className="absolute md:hidden top-0 w-full object-cover -z-10"
      />
      <div className="maxWidthForSections">
        <h2 className="text-3xl sm:text-5xl font-medium text-white text-shadow-dark text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-white text-shadow-dark mt-2 text-base sm:text-lg font-medium">Meet the event leads of 24 Frames! We are ready to address all your queries.</p>

        

<EventLeadTemplate teamLead={teamLead} textColor='text-white'></EventLeadTemplate>
      </div>
    </div>
  );
};

export default EventLead;
