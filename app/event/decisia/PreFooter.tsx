import EventPreFooter from '@/components/EventPreFooter'
import React from 'react'

const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full  
 bg-gradient-to-b from-[#D33D18] 
    to-[#fe0c0c] 
-z-30"></div>
 {/* <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40  top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      /> */}
      <EventPreFooter rocketColor="text-[#540400]" smokeColor="text-[#a90808]" windowColor="text-[#D33D18]"></EventPreFooter>
</div>
  )
}

export default PreFooter
