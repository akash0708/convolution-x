import Image from "next/image";
import React from "react";
import skyfall from '@/assets/images/Frames/skyfall.png'
import baseCloud from '@/assets/images/Frames/prefooterImg.png'




const PreFooter = () => {
  return (
    <div className="overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full  bg-[#4E85FD] 
     -z-30"></div>
    
     
      
        {/* -----------------rocket svg--------------- */}        

        {/* <EventPreFooter rocketColor="text-white" smokeColor="text-[#c0c4f0]" windowColor="text-[#24339B]"></EventPreFooter> */}

         <Image src={baseCloud} alt='iceberg' className="min-h-[420px] lg:opacity-100 opacity-0 object-cover"></Image>
        <Image src={baseCloud} alt='iceberg' className="min-h-[420px] opacity-100 lg:opacity-0 w-auto absolute -bottom-2 left-1/2 -translate-x-1/2 object-cover -z-10"></Image>
        <Image src={skyfall} alt='iceberg' className="absolute top-[15%] left-1/2 -translate-x-1/2 lg:max-w-[170px] max-w-[100px] object-cover z-20"></Image>
        
        
        
      
     
    </div>
  );
};

export default PreFooter;
