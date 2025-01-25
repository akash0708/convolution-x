import Image from "next/image";
import React from "react";
import person1 from "@/assets/images/JuTalks/1.png";
import person2 from "@/assets/images/JuTalks/2.png";
import person3 from "@/assets/images/JuTalks/3.png";
import person4 from "@/assets/images/JuTalks/4.png";
import person5 from "@/assets/images/JuTalks/5.png"; 
import stripBg from '@/assets/images/JuTalks/stripBg.png'

const items: { name: string; description: string }[] = [
  {
    name: "Mr. Sabyasachi Chakraborty",
    description: "Renowned for portraying the iconic detectives, Feluda and Kakababu.",
  },
  {
    name: "Mr. Kalyan Mukhopadhyay",
    description: "Renowned Ex- IPS and Retired. Additional CP of Kolkata",
  },
  {
    name: "Ms. Paramita Mukherjee",
    description: "Eminent Psychologist with 23+ years of experience.",
  },
  {
    name: "Dr. Subhamoy Maitra",
    description: "Senior Professor of ISI Kolkata and Political Analyst",
  },
  {
    name: "Mr. Utsav Mukherjee",
    description:
      "Film Director and Writer of films like Aparajito, Bhobishyoter Bhoot, BorunBabur Bondhu.",
  },
];
const pics = [person5,person1, person2, person3, person4];
const Pannels = () => {
  return (
    <div id="panelist" className=" py-12 relative  flex items-center  ">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#fad2e0]     
          to-[#f8bcd0]"
      >
      <Image src={stripBg} alt="strip bg" className="h-full"></Image>
      </div>
      <div className="h-full w-full  maxWidthForSections ">
      <h2 className="sm:text-5xl text-2xl font-medium text-[#552614]  mb-8 text-center ">
          Current Edition Panelists
        </h2>
        <p className="text-center sm:text-2xl text-lg  text-[#552614]/90">To be declared soon ...</p>
        {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-2  sm:gap-4">
          {items.map((item, index) => {
            return (
              <div
                key={item.name}
                className="flex flex-col sm:gap-y-2 items-center font-sans sm:px-4 sm:py-8 px-2 py-6 text-[#512511] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop:blur-sm  rounded-2xl"
              >
                <div className="overflow-hidden flex items-center rounded-full size-32 ">
                  <Image src={pics[index]} alt="kaku" className=""></Image>
                </div>

                <h1 className="sm:text-lg text-sm text-center font-semibold">
                  {item.name}{" "}
                </h1>
                <p className="text-center sm:text-base text-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div> */}
        <h2 className="sm:text-5xl text-2xl font-medium text-[#552614] mt-16  mb-8 text-center ">
          Previous Edition Panelists
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2  sm:gap-4">
          {items.map((item, index) => {
            return (
              <div
                key={item.name}
                className="flex flex-col sm:gap-y-2 gap-y-1 items-center font-sans sm:px-4 sm:py-8 px-2 py-6 text-[#512511] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop:blur-sm  rounded-2xl"
              >
                <div className="overflow-hidden flex items-center rounded-full size-32 ">
                  <Image src={pics[index]} alt="kaku" className=""></Image>
                </div>

                <h1 className="sm:text-lg text-sm text-center font-semibold">
                  {item.name}{" "}
                </h1>
                <p className="text-center sm:text-base text-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pannels;
