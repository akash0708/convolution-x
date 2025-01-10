import Image from "next/image";
import React from "react";
import wave from "@/assets/images/AbolTabol/wavesUnderwater.png";
import grass from "@/assets/images/AbolTabol/greemgrass.png";
import flower from "@/assets/images/AbolTabol/redflower.png";
import yellowsub from "@/assets/images/AbolTabol/yellowsub.png";
import Link from "next/link";

const AboutAT = () => {
  return (
    <div
      id="rules"
      className={`py-12 relative min-h-screen flex items-center    `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-20"
      >
        <div className="relative w-full h-full top-0 left-0">
          <Image
            src={wave}
            className=" absolute lg:w-full lg:h-auto h-full top-0 object-cover left-1/2 opacity-50 -z-20 -translate-x-1/2 "
            alt="trees"
          />
           <Image
            src={grass}
            className=" absolute right-[12%] bottom-[12%] max-w-[150px] w-[20vw]"
            alt="trees"
          />
           <Image
            src={yellowsub}
            className=" absolute top-[30%] w-[70vw] max-w-[500px] right-[5%]"
            alt="trees"
          />
           <Image
            src={flower}
            className=" absolute left-[12%] bottom-[15%] max-w-[150px] w-[20vw]"
            alt="trees"
          />
        </div>
      </div>

      <div className="maxWidthForSections flex flex-col items-center">
        <div
          className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-gradient-to-l from-white/20 to-white/5 backdrop-filter backdrop-blur-sm relative shadow-black/20 shadow-md `}
        >
          
          <h1 className="uppercase text-center text-2xl sm:text-4xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3 list-disc  list-inside text-shadow-dark text-white sm:text-xl text-sm">
            <li>
            This event is based on 'Bahfest', for more clarification <span><Link href='http://bahfest.com/' className="underline underline-offset-2">click here</Link></span>
            </li>
            <li>
            Event comprises two rounds:
              <ol  style={{ listStyleType: 'lower-alpha' }} className=" ml-6 list-inside">
                <li>
                Online Screening round
                </li>
                <li>
                Offline Presentation round. Each team can have 2-4 members.
                </li>
              </ol>
            </li>
            <li>The teams have to submit an abstract for their ideas for the first round. Top 8-12 teams will be shortlisted for the offline presentation round.
            </li>
            <li>
            Judging criteria are as follows:
              <ol className="ml-6 list-inside" style={{ listStyleType: 'lower-alpha' }}>
                <li>Comic sense of the presentation
                </li>
                <li>How “logically illogical” the presentation is</li>
                <li>Relevance of the topic in case of a tie</li>
              </ol>
            </li>
            <li>
            There will be a maximum of 30 slides and a minimum of 6 slides for the presentation. Each team will have to complete their presentation within 15 minutes.
            </li>
          </ul>
        </div>
        <button className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full    shadow-md text-white  transition-all duration-300 shadow-white/70 hover:shadow-white/30  bg-[#0212B4] hover:bg-white  hover:text-[#0212B4] text-[#ffff]">
          <p className="     ">Know More</p>
        </button>
      </div>
    </div>
  );
};

export default AboutAT;
