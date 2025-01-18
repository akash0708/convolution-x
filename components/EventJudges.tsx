import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

// Define the Professor type
interface Professor {
  name: string;
  profession: string;
  researchPoint: string;
  img: string; // Image path or imported asset
}

// Define the component props
interface EventJudgesProps {
  textColor: string; // Text color for custom styling
  professors: Professor[]; // List of professors
}

const EventJudges: React.FC<EventJudgesProps> = ({ textColor, professors }) => {
  return (
    <div className="font-sans flex justify-center flex-col sm:flex-row gap-2 md:gap-x-12">
      {professors.map((professor, index) => (
        <div
          key={index}
          className="rounded-xl bg-white/20 shadow-black/20 shadow-md backdrop-blur-sm flex py-6 px-4 items-center gap-x-4 sm:max-w-[500px]"
        >
          <Image
            src={`/MentorJudges/` + professor.img}
            alt={`${professor.name} image`}
            className="size-20 sm:size-28 rounded-full shadow-white shadow sm"
            width={112} // Adjust width
            height={112} // Adjust height
          />
          <div>
            <div className={`flex items-center gap-2 ${textColor}`}>
              <h2 className={`font-semibold sm:text-base text-sm ${textColor}`}>
                {professor.name}
              </h2>
              <Link target="_blank" href={professor.researchPoint}>
                <FaInfoCircle />
              </Link>
            </div>
            <p className={`text-xs sm:text-sm ${textColor}`}>{professor.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventJudges;
