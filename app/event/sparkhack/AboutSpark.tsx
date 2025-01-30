import React from "react";
import Image from "next/image";
import pendant1 from "@/assets/images/SparkHack/pendant1.webp";
import pendant3 from "@/assets/images/SparkHack/pendant3.webp";
import pendant2 from "@/assets/images/SparkHack/pendant2.webp";
import flakebg from "@/assets/images/SparkHack/flakeBg.webp";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.webp";
const sparkhackRules = [
 
  "Round 1 : PPT Shortlisting : Teams must submit a concise PowerPoint presentation (max 10 slides) outlining their proposed solution. Judges will review the submissions and shortlist the top 30 teams. ",
  "Round 2 : Online Pitching : Shortlisted teams will present their ideas to the judges via Google Meet. Based on their pitches, the judges will select the top 10 teams for the next round.",
  "Round 3 : Prototype Creation:  The top 10 teams will develop and showcase their prototypes offline at the Electrical Engineering Department, Jadavpur University.",
];
const AboutSpark = () => {
  return (
    <div
      id="rules"
      className={`py-12 relative  flex items-center  overflow-hidden  `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF] -z-20"
      ></div>
      {/* --------------------------flake Images background-------------- */}
      <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40 object-cover  top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-full  object-cover absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      />
      <div className="maxWidthForSections flex flex-col items-center">
        <div
          className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-white/5 backdrop-filter backdrop-blur-sm relative shadow-black/10 shadow-md `}
        >
          {/* ----------------------pendant hanging-------------------------- */}
          <>
            <Image
              src={pendant1}
              className="absolute md:block hidden top-0 left-[10%] w-10 h-auto"
              alt="trees"
            />
            <Image
              src={pendant2}
              className="absolute md:block hidden top-0 left-[17.5%] w-10 h-auto"
              alt="trees"
            />
            <Image
              src={pendant3}
              className="absolute md:block hidden top-0 left-[25%] w-10 h-auto"
              alt="trees"
            />
            <Image
              src={pendant1}
              className="absolute md:block hidden top-0 right-[10%] w-10 h-auto"
              alt="trees"
            />
            <Image
              src={pendant2}
              className="absolute md:block hidden top-0 right-[17.5%] w-10 h-auto"
              alt="trees"
            />
            <Image
              src={pendant3}
              className="absolute md:block hidden top-0 right-[25%] w-10 h-auto"
              alt="trees"
            />
          </>
          <h1 className="uppercase text-center text-3xl sm:text-5xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3 list-disc list-inside">
          <li
                  className="text-white sm:text-xl text-sm text-shadow-dark "
                >
                  SparkHack features multiple tracks, including an <span className="underline">Open Track </span>  where teams (2-4 members, including a team lead) work on a problem statement to create real-world solutions. Teams can consist of members from different streams and academic years and are open to both undergraduate and postgraduate students. Cross-college teams are allowed.
                </li>
            {sparkhackRules.map((rule, index) => {
              return (
                <li
                  key={`rule` + index}
                  className="text-white sm:text-xl text-sm text-shadow-dark "
                >
                  {rule}
                </li>
              );
            })}
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1y2x3A7acVrhfbIZEpMQXXJ5RIyZXeasN/view?usp=drive_link"
          target="_blank"
          className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full bg-[#3AADD9] shadow-white/80 hover:shadow-white/40 shadow-md text-white hover:opacity-100 opacity-80 transition-all duration-300 "
        >
          <p className="     ">Know More</p>
        </a>
      </div>
    </div>
  );
};

export default AboutSpark;
