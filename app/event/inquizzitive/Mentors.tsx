import Image from "next/image";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import pixelBox from "@/assets/images/Inquizzitive/pixelBox.png"

type Professor = {
  name: string;
  profession: string;
  researchPoint: string;
  img: string; // Image path or imported asset
};

const professors: Professor[] = [
  {
    name: "Biswajit Bhattacharyya",
    profession:
      "Associate Professor at Department of Electrical Engineering, Jadavpur University",
    researchPoint: "https://jaduniv.irins.org/profile/57106",
    img: "bjb.png", // Replace with the actual image path or import
  },
  
];

const Mentors = () => {
  return (
    <div id="mentor" className="relative  py-20">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-[#1A0F52]"
      >
        
      </div>
      <Image src={pixelBox} alt="hero" className="absolute top-[2%] left-[-5%] -z-10 object-cover max-w-[350px] min-w-[200px] w-[20vw]" />
      
      <div className="maxWidthForSections">
        <h2 className="text-3xl sm:text-5xl font-medium text-white text-center ">
          Mentor
        </h2>
        <p className="opacity-80 text-center mt-2 text-base sm:text-xl font-medium text-white">
          Meet the Mentor of Inquizzitive!
        </p>

        <div className="mx-auto flex justify-center mt-6">
          {/* ------------------mentor names---------------- */}
          <div
            className={`font-sans flex justify-center flex-col sm:flex-row gap-2 md:gap-x-12`}
          >
            {professors.map((professor, index) => (
              <div
                key={index}
                className="rounded-xl text-white bg-white/20 shadow-black/20 shadow-md backdrop-blur-sm flex  py-6 px-4 items-center gap-x-4  sm:max-w-[500px] "
              >
                <Image
                  src={`/MentorJudges/` + professor.img}
                  alt={`${professor.name} image`}
                  className="size-20 sm:size-28 rounded-full shadow-white shadow sm"
                  width={112} // Adjust width
                  height={112} // Adjust height
                />
                <div className="">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold sm:text-base text-sm  ">
                      {professor.name}
                    </h2>
                    <Link target="_blank" href={professor.researchPoint} className="">
                      <FaInfoCircle />
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm ">{professor.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
