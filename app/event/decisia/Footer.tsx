import Image from "next/image";
import React from "react";
// import whiteStar from '@/assets/images/Footer/stars white.png'
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
import ConvoIcon from "@/assets/images/HeroSectionImages/ConvoSvg.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import EventFooter from "@/components/EventFooter";

const Footer = () => {
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      {/* <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40   top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-full object-cover absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      /> */}
      
      <div className="absolute  top-0 left-0 w-full h-full  bg-gradient-to-b from-[#77340F]  via-[#931308]  to-[#5B0804] -z-20 ">
       
      </div>      

      <EventFooter linkText="hover:scale-105 text-white text-shadow-dark" headerText="text-white text-shadow-dark" svgColor="white" listText="text-white text-shadow-dark " iconColor="darkBlue"></EventFooter>
    </div>
  );
};

export default Footer;
