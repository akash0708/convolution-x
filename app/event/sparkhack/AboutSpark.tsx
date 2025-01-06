import React from "react";
import Image from "next/image";
import trees from "@/assets/images/SparkHack/trees.png";
import pendant1 from "@/assets/images/SparkHack/pendant1.png";
import pendant3 from "@/assets/images/SparkHack/pendant3.png";
import pendant2 from "@/assets/images/SparkHack/pendant2.png";

const sparkhackRules = [
  "Sparkhack will feature various tracks, where teams select one to create a feasible real-world solution for the given problem.",
  "Upon event registration, participants will receive the problem statements via their email.",
  "Preliminary round: The teams have to present their ideas to the judges on a Google Meet. The judges will shortlist 8 teams for the next rounds. The teams then have to pitch their ideas and present their prototype to the judges in-person.",
  "Prototype creating round: The shortlisted teams will have to implement a prototype based on their ideation which will be held via offline mode in Jadavpur University Electrical Engineering Department.",
  "Pitching round: The teams will have to pitch their ideas in offline mode to the panel of judges.",
];
const AboutSpark = () => {
  return (
    <div className={`py-12 relative  flex items-center  overflow-hidden  `}>
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF] -z-20"
      ></div>

      <Image
        src={trees}
        className=" h-[70%] w-auto opacity-80 absolute   -bottom-0 right-0 -z-10"
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
        className="absolute sm:block hidden top-0 left-[10%] w-10 h-auto"
        alt="trees"
      />
       <Image
        src={pendant2}
        className="absolute sm:block hidden top-0 left-[17.5%] w-10 h-auto"
        alt="trees"
      />
       <Image
        src={pendant3}
        className="absolute sm:block hidden top-0 left-[25%] w-10 h-auto"
        alt="trees"
      />
      <Image
        src={pendant1}
        className="absolute sm:block hidden top-0 right-[10%] w-10 h-auto"
        alt="trees"
      />
       <Image
        src={pendant2}
        className="absolute sm:block hidden top-0 right-[17.5%] w-10 h-auto"
        alt="trees"
      />
       <Image
        src={pendant3}
        className="absolute sm:block hidden top-0 right-[25%] w-10 h-auto"
        alt="trees"
      />
          </>
          <h1 className="uppercase text-center text-2xl sm:text-4xl mb-8 text-white text-shadow-dark">
            Rules & Regulations
          </h1>
          <ul className="space-y-3 list-disc list-inside">
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
        <button className="mt-4 self-center py-2 sm:px-8 px-6 sm:text-xl rounded-full bg-[#3AADD9] shadow-white/80 hover:shadow-white/40 shadow-md text-white hover:opacity-100 opacity-80 transition-all duration-300 ">
                <p className="     ">
                  Know More
                </p>
            </button>
      </div>
    </div>
  );
};

export default AboutSpark;
