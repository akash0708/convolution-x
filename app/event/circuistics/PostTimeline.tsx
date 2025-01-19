import Image from "next/image";
import React from "react";
import prefooter from "@/assets/images/Circuistics/postTimeline.png";


const PostTimeline = () => {
  return (
    <div className="pt-8  overflow-hidden relative">
      <div
        className="absolute top-0 bottom-0 left-0  w-full  bg-gradient-to-b from-[#3122B1] to-[#150E4B] -z-50"
      ></div>
      <div className="relative">
        <Image
          src={prefooter}
          alt="preefooter ship"
          className="min-h-[320px] w-full  lg:opacity-100 opacity-0"
        ></Image>
        <Image
          src={prefooter}
          alt="preefooter ship"
          className="min-h-[320px] object-cover opacity-100 lg:opacity-0 w-auto absolute -bottom-2 left-1/2 -translate-x-1/2 "
        ></Image>
        
      </div>
    </div>
  )
}

export default PostTimeline
