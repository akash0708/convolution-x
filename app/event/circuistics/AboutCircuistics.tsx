import React from "react";
import Image from "next/image";
import pendant1 from "@/assets/images/SparkHack/pendant1.webp";
import pendant3 from "@/assets/images/SparkHack/pendant3.webp";
import pendant2 from "@/assets/images/SparkHack/pendant2.webp";
import flakebg from "@/assets/images/Circuistics/phone white star bg.png";
import flakebgMobile from "@/assets/images/Circuistics/phone white star bg.png";
const rules = [
    "Teams can have 3-4 (max.) members, including the Team Lead.",
    "Teams may not be formed across different institutes or across different years; only students from the same year and the same institute can form a team.",
    "Registration will be ONLINE through the official website of Convolution-X.",
    "There will be two Tiers for this event: Tier 1 for UG1 and UG2, and Tier 2 for UG3 and UG4.",
    "There will be two rounds: Prelims (Pen & Paper Mode) and Finals, conducted over a span of two days.",
    "For Tier 1, there will be two different sets of question papers. UG1 will have a reduced syllabus compared to UG2, providing some equity. The selection will be based on a weighted score or percentile method.",
    "Tier 2 will have the same question paper provided to both years.",
    "Questions will be mostly MCQ and NAT in the Prelims, with MSQ only for Tier 2. Use of calculators is allowed.",
    "The top 8 teams will move to the Finals from each tier.",
    "Finalists of both Tiers will have to build a fully functional electronic circuit according to the given problem statement.",
    "In case of a tie in scores, the time of completion will be noted."
  ];
const AboutCircuistics = () => {
    return (
        <div
          id="rules"
          className={`py-12 relative  flex items-center  overflow-hidden  `}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#150E4B] -z-20"
          ></div>
          {/* --------------------------flake Images background-------------- */}
          <Image
            src={flakebg}
            className=" h-auto hidden sm:block w-full  absolute opacity-90 object-cover  top-0 right-0 -z-10"
            alt="trees"
          />
          <Image
            src={flakebgMobile}
            className=" sm:hidden block h-full  object-cover absolute opacity-90   bottom-0 right-0 -z-10"
            alt="trees"
          />
          <div className="maxWidthForSections flex flex-col items-center">
            <div
              className={`rounded-xl sm:py-12 py-6 sm:px-8 px-4 bg-gradient-to-l from-white/20 to-white/5 backdrop-filter backdrop-blur-sm relative shadow-black/10 shadow-md `}
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
                {rules.map((rule, index) => {
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
            <a href="https://drive.google.com/file/d/1OA57qedl-NayL9hJAxgaOAYngQHQzfza/view" target="_blank"  className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full hover:bg-[#150E4B] shadow-md shadow-white/90 hover:shadow-[#150E4B] hover:text-white  bg-white hover:opacity-90 text-[#3122B1] transition-all duration-300 ">
              <p className="     ">Know More</p>
            </a>
          </div>
        </div>
      );
}

export default AboutCircuistics
