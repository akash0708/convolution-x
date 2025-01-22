import EventPreFooter from '@/components/EventPreFooter'
import Image from 'next/image'
import React from 'react'
import decisiaBgMobile from "@/assets/images/Algomaniac/starbgMobile.png";
import decisiaBg from "@/assets/images/Algomaniac/star bg.png";
const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full  
 bg-gradient-to-t from-[#0D30BB] to-[#2C1071] 
-z-30"></div>
 <Image
            src={decisiaBg}
            className=" hidden md:block w-full object-cover animate-twinkle  absolute   top-[0]  right-0 "
            alt="trees"
          />
          <Image
            src={decisiaBgMobile}
            className=" md:hidden block w-full  object-cover absolute opacity-80   left-1/2 -translate-x-1/2 bottom-0 "
            alt="trees"
          />
      <EventPreFooter rocketColor="text-darkBlue" smokeColor="text-[#1E014F]" windowColor="text-[#ffff]"></EventPreFooter>
</div>
  )
}

export default PreFooter
