import Image from "next/image";

import EventFooter from "@/components/EventFooter";
import texture from '@/assets/images/JuTalks/bgWater.png'
import textureMobile from '@/assets/images/JuTalks/bgWaterMobile.png'
const Footer = () => {
  
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      

      
      {/* <div className="w-full relative">
       
        
      </div> */}
      <div className="absolute top-0 w-full flex justify-center -z-10">
      {/* <Image src={iceBottom} alt='iceberg' className="sm:w-auto max-w-none w-[170vw]"></Image> */}
      </div>
      <div className="bg-gradient-to-b from-[#FFA3BC] to-[#FF9CB8] absolute top-0 h-full w-full -z-20">
      <Image src={texture} alt='texture water' className="h-full hidden md:block object-cover"></Image>
      <Image src={textureMobile} alt='texture water' className="h-full md:hidden object-cover"></Image>
        
      </div>
          <EventFooter
            linkText="text-white text-shadow-dark"
            headerText="text-white text-shadow-dark"
            svgColor="white"
            listText="text-white text-shadow-dark "
            iconColor="[#552614]"
          ></EventFooter>


    </div>
  );
};

export default Footer;
