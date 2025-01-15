import Image from "next/image";
import React from "react";
import flakebg from "@/assets/images/SparkHack/flakeBg.webp";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.webp";
import EventPreFooter from "@/components/EventPreFooter";
// import footerbg from "@/assets/images/Footer/footerImage2.webp";


const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-b from-[#67C6DD]  
    to-[#3AADD9] to-[#2CB1DF] 
     -z-20"></div>
      {/* <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40  top-0 right-0 -z-10"
        alt="trees"
      />  */}
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      />
        {/* -----------------rocket svg--------------- */}        

        <EventPreFooter rocketColor="text-white" smokeColor="text-[#8FE3F0]" windowColor="text-[#2cb1df]"></EventPreFooter>
      
     
      <div className="absolute h-2 w-full bottom-0 bg-[#8FE3F0]"></div>
    </div>
  );
};

export default PreFooter;
