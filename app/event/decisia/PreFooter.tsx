import EventPreFooter from '@/components/EventPreFooter'
import React from 'react'

const PreFooter = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full  
 bg-gradient-to-t from-[#DE5C00] via-[#77340F] 
    to-[#931308] 
-z-20"></div>
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
      <EventPreFooter rocketColor="text-white" smokeColor="text-[#840301]" windowColor="text-[#2cb1df]"></EventPreFooter>
</div>
  )
}

export default PreFooter
