import Image from "next/image";
import React from "react";
import decisiaBgMobile from '@/assets/images/Circuistics/phone white star bg.png'
import decisiaBg from '@/assets/images/Circuistics/whitestarbg.png'
import EventPreFooter from "@/components/EventPreFooter";
import glacier from "@/assets/images/Circuistics/glacier.png"
import iceTop from "@/assets/images/Circuistics/top ice.png"

// import footerbg from "@/assets/images/Footer/footerImage2.webp";


const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-b from-[#24339B]  to-[#171d5f] 
     -z-30"></div>
      <Image
        src={decisiaBg}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute    top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute    top-0 right-0 -z-10"
        alt="trees"
      />
      
        {/* -----------------rocket svg--------------- */}        

        {/* <EventPreFooter rocketColor="text-white" smokeColor="text-[#c0c4f0]" windowColor="text-[#24339B]"></EventPreFooter> */}
        <div className="flex justify-center">

        <Image src={iceTop} alt='iceberg' className="sm:w-auto max-w-none w-[170vw]"></Image>
        </div>
      
     
      {/* <div className="absolute h-2 w-full bottom-0 bg-[#8FE3F0] "></div> */}
    </div>
  );
};

export default PreFooter;
