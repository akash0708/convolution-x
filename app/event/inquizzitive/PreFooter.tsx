import Image from "next/image";
import React from "react";
import cargo from "@/assets/images/Inquizzitive/preFooterImg.png"
import moonNcloud from "@/assets/images/Inquizzitive/moonNcloud.png"



const PreFooter = () => {
  return (
    <div className="overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-[#1A0F52] 
     -z-30"></div>
    
     
      
        {/* -----------------rocket svg--------------- */}        

       

         <Image src={cargo} alt='iceberg' className="min-h-[350px]  opacity-0 object-cover mr-4"></Image>
        <Image src={moonNcloud} alt='iceberg' className="min-h-[300px]  absolute -bottom-0  object-cover object-right "></Image>

        <Image src={cargo} alt='iceberg' className="min-h-[350px]  absolute -bottom-1 object-right right-4 object-cover "></Image>
      
        
        
      
     
    </div>
  );
};

export default PreFooter;
