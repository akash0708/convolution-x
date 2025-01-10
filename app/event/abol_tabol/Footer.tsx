import EventFooter from '@/components/EventFooter'
import Image from 'next/image'
import React from 'react'
import footerBg from "@/assets/images/AbolTabol/footerBg.png";
import footerBgMobile from "@/assets/images/AbolTabol/footerbgmobile.png";

const Footer = () => {
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
        <Image
        src={footerBg}
        className=" h-full hidden md:block sm:w-full object-cover absolute opacity-50   bottom-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={footerBgMobile}
        className=" h-full block md:hidden  object-cover absolute opacity-40   bottom-0 right-0 -z-10"
        alt="trees"
      />
        <div className="absolute  top-0 left-0 w-full h-full  bg-gradient-to-br from-[#0215C5] via-[#020F92] 
     to-[#010A5F] -z-20 ">
       
       </div> 
        <EventFooter linkText="hover:scale-105 text-white text-shadow-dark" headerText="text-white text-shadow-dark" svgColor="white" listText="text-white text-shadow-dark " iconColor=" text-[#010A5F]"></EventFooter>
        </div>
  )
}

export default Footer
