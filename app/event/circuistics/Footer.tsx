"use client"
import Image from "next/image";
// import whiteStar from '@/assets/images/Footer/stars white.webp'
import glacier from "@/assets/images/Circuistics/glacier.png";
import EventFooter from "@/components/EventFooter";
import iceBottom from "@/assets/images/Circuistics/bottom ice.png"
import bub1 from "@/assets/images/Circuistics/bub1.png"
import bub2 from "@/assets/images/Circuistics/bub2.png"
import bub3 from "@/assets/images/Circuistics/bub3.png"
import bub4 from "@/assets/images/Circuistics/bub4.png"

const Footer = () => {
  
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      

      <div className="absolute  top-0 left-0 w-full h-full  bg-gradient-to-b from-[#171d5f] to-[#323ecd] -z-30 ">
      
      </div>

      {/* <div className="w-full relative">
       
        
      </div> */}
      <div className="absolute top-0 w-full flex justify-center -z-10">
      <Image src={iceBottom} alt='iceberg' className="sm:w-auto max-w-none w-[170vw]"></Image>
      </div>
      <div className="bg-gradient-to-b from-[#3584c4] to-darkBlue absolute top-0 h-full w-full -z-20">
      <Image
          src={bub1}
          alt="altGlacier"
          className="sm:hidden block absolute bottom-[5%] left-[8%] z-10 max-h-[100px] object-contain"
        ></Image>
        <Image
          src={bub2}
          alt="altGlacier"
          className="sm:hidden block absolute bottom-[15%] right-[2%] z-10 max-h-[120px] object-contain"
        ></Image>
        <Image
          src={bub3}
          alt="altGlacier"
          className="sm:hidden block absolute bottom-[30%] left-[2%] z-10 max-h-[150px] object-contain"
        ></Image>
         <Image
          src={bub4}
          alt="altGlacier"
          className="sm:hidden block absolute bottom-[50%] right-[2%] z-10 max-h-[150px] object-contain"
        ></Image>
        
      </div>
          <EventFooter
            linkText="text-white text-shadow-dark"
            headerText="text-white text-shadow-dark"
            svgColor="white"
            listText="text-white text-shadow-dark "
            iconColor="darkBlue"
          ></EventFooter>


    </div>
  );
};

export default Footer;
