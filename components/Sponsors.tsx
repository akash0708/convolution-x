import Image from "next/image";
import React from "react";
import "@/app/sponsors.css";
import techEle from "@/assets/images/ConvoSponsors/techno ele.webp";
import exide from "@/assets/images/ConvoSponsors/Exide.webp";
import megatherm from "@/assets/images/ConvoSponsors/Megatherm.png";
import iet from "@/assets/images/ConvoSponsors/iet.png";
import ntpl from "@/assets/images/ConvoSponsors/NTPL.png";
import pes from "@/assets/images/ConvoSponsors/pees.png";
import raydus from "@/assets/images/ConvoSponsors/raydus.png";
import deis from "@/assets/images/ConvoSponsors/deis.png";
import sps from "@/assets/images/ConvoSponsors/sps.png";
import telegraph from "@/assets/images/ConvoSponsors/telegrapg.png";


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
{/* ----------------------co sponsor---------------- */}
        <p className="text-white text-center text-2xl mb-4">
          Co-Sponsor
        </p>
        <div className="flex gap-4 justify-center mb-10">
          <p
            className="bg-white/90  rounded-md"
          >
            <Image
              src={raydus}
              alt="megatherm image"
              className=" h-[80px] w-auto  "
            ></Image>
          </p>
          
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

        {/* -----------------------------event partners--------------------- */}
        <p className="text-white text-center text-xl mb-4 mt-10">
          Event Partners
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.theiet.org/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md flex justify-center items-center"
          >
            <Image
              src={iet}
              alt="exide image"
              className=" h-[60px] w-auto object-contain  "
            ></Image>
          </a>
          <a
            href="http://ieeepeskolkata.org/#:~:text=The%20Power%20%26%20Energy%20Society%20"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={pes}
              alt="exide image"
              className=" h-[80px] w-auto object-contain "
            ></Image>
          </a>
          <a
            href="http://www.ieeespskolkata.org/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={sps}
              alt="exide image"
              className=" h-[80px] w-auto object-contain "
            ></Image>
          </a>
          <a
            href="https://ewh.ieee.org/r10/calcutta/deis/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={deis}
              alt="exide image"
              className=" h-[80px] w-auto object-contain "
            ></Image>
          </a>
          
          <a
            href="https://www.neoteletronix.com/"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={ntpl}
              alt="exide image"
              className=" h-[80px] w-auto object-contain "
            ></Image>
          </a>
        </div>

{/* ---------------------------------media partners--------------------- */}
        <p className="text-white text-center text-xl mb-4 mt-10">
          Digital Media Partner
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.telegraphindia.com/edugraph"
            target="_blank"
            className="bg-white/90 p-2 rounded-md"
          >
            <Image
              src={telegraph}
              alt="megatherm image"
              className=" max-w-[220px]  object-cover  "
            ></Image>
          </a>
          
        </div>
        {/* <p className="text-white text-center sm:text-base text-sm mt-8">
          Want to be a part of Convolution-X ? Join us as a sponsor of
          Convolution! Reach out to our team for all the details and queries.
        </p> */}
      </div>
    </div>
  );
};

export default Sponsors;
