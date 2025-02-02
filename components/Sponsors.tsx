import Image from "next/image";
import React from "react";
import "@/app/sponsors.css";
import techEle from "@/assets/images/ConvoSponsors/techno ele.webp";
import exide from "@/assets/images/ConvoSponsors/Exide.webp";
import megatherm from "@/assets/images/ConvoSponsors/Megatherm.png";

const Sponsors: React.FC = () => {
  return (
    <div className="bg-darkBlue py-8">
      <h1 className="text-center text-white sm:text-5xl text-3xl mb-12">
        Our Sponsors
      </h1>

      <div className=" maxWidthForSections">
      <p className="text-white text-center text-2xl mb-4">
          Main Sponsor
        </p>
        <div className="flex gap-4 justify-center mb-10">
          <a
            href="https://megatherm.com/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={megatherm}
              alt="megatherm image"
              className=" max-w-[220px]  object-cover  "
            ></Image>
          </a>
          
        </div>
        {/* -----------------------------associate--------------------- */}
        <p className="text-white text-center text-xl mb-4">
          Associate Sponsors
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.exideindustries.com/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={exide}
              alt="exide image"
              className=" max-w-[150px] object-cover  "
            ></Image>
          </a>
          <a
            href="https://www.techno.co.in/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={techEle}
              alt="exide image"
              className=" max-w-[150px] object-cover "
            ></Image>
          </a>
        </div>
        <p className="text-white text-center sm:text-base text-sm mt-8">
          Want to be a part of Convolution-X ? Join us as a sponsor of
          Convolution! Reach out to our team for all the details and queries.
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
