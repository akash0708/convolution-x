import Image from "next/image";
import React from "react";
import decisiaBgMobile from '@/assets/images/Circuistics/phone white star bg.png'
import decisiaBg from '@/assets/images/Circuistics/whitestarbg.png'
import iceTop from "@/assets/images/Eureka/treeTop.png"
import zameen from "@/assets/images/Eureka/baseLeaf.png"

// import footerbg from "@/assets/images/Footer/footerImage2.webp";


const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative ">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-t from-[#faa307]  to-[#9b2226] 
     -z-30"></div>
      {/* <Image
        src={decisiaBg}
        className=" h-auto animate-twinkle hidden sm:block w-full  absolute    top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={decisiaBgMobile}
        className=" sm:hidden animate-twinkle block h-auto w-full  absolute    top-0 right-0 -z-10"
        alt="trees"
      /> */}
      
        
        <div className="flex justify-center">

        <Image src={iceTop} alt='iceberg' className="max-h-[700px] object-contain"></Image>
        <Image src={zameen} alt='iceberg' className="absolute left-1/2 -translate-x-1/2 min-h-[50px] object-cover bottom-[-2px]  "></Image>
        </div>
      
     
      {/* <div className="absolute h-2 w-full bottom-0 bg-[#8FE3F0] "></div> */}
    </div>
  );
};

export default PreFooter;
