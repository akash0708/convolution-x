import Image from "next/image";
import React from "react";
import decisiaBgMobile from '@/assets/images/Algomaniac/starbgMobile.png'
import FooterBg from '@/assets/images/Algomaniac/footerBg.png'

import EventFooter from "@/components/EventFooter";

const Footer = () => {
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      <Image
        src={FooterBg}
        className=" block lg:w-full lg:h-auto h-full  absolute object-cover    top-0 left-1/2 -translate-x-1/2 -z-10"
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute opacity-90   top-0 right-0 -z-10"
        alt="trees"
      />
        
      
      {/* <div className="absolute  top-0 left-0 w-full h-full  bg-gradient-to-b from-[#a90808]  via-[#7e0606]  to-[#540404] -z-20 ">
       
      </div>       */}

      <EventFooter linkText=" text-white text-shadow-dark" headerText="text-white text-shadow-dark" svgColor="white" listText="text-white text-shadow-dark " iconColor=" text-[#2C1071]"></EventFooter>
    </div>
  );
};

export default Footer;
