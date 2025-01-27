"use client"
import Image from "next/image";
import cargo from "@/assets/images/Inquizzitive/preFooterImg.png"
import stars from "@/assets/images/Inquizzitive/starFooter.png"
import starsMobile from "@/assets/images/Inquizzitive/starFooterMobile.png"

import EventFooter from "@/components/EventFooter";


const Footer = () => {
  
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      

      <div className="absolute  top-0 left-0 w-full h-full  bg-[#19788f]  -z-30 ">
      <Image src={stars} alt='iceberg' className=" md:block hidden  absolute top-0 object-right right-4 object-cover  -z-20 "></Image>
      <Image src={starsMobile} alt='iceberg' className="md:hidden absolute top-0 object-right right-4 object-cover  -z-20 "></Image>

      </div>

      

      {/* <div className="w-full relative">
       
        
      </div> */}
      <Image src={cargo} alt='iceberg' className="min-h-[350px]  absolute top-0 object-right right-4 object-cover opacity-25 -z-20 scale-y-[-1]"></Image>
      
          <EventFooter
            linkText="text-white text-shadow-dark"
            headerText="text-white text-shadow-dark"
            svgColor="white"
            listText="text-white text-shadow-dark "
            iconColor="black"
          ></EventFooter>


    </div>
  );
};

export default Footer;
