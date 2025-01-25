"use client"
import Image from "next/image";

import EventFooter from "@/components/EventFooter";


const Footer = () => {
  
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      

      <div className="absolute  top-0 left-0 w-full h-full  bg-[#E76617]  -z-30 ">
      
      </div>

      {/* <div className="w-full relative">
       
        
      </div> */}
      <div className="absolute top-0 w-full flex justify-center -z-10">
      {/* <Image src={iceBottom} alt='iceberg' className="sm:w-auto max-w-none w-[170vw]"></Image> */}
      </div>
      <div className="bg-gradient-to-b from-[#9B99EC] to-[#4a0eff] absolute top-0 h-full w-full -z-20">
      
        
      </div>
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
