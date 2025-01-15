import React from 'react'
import ComingSoon from '@/components/ComingSoon'
import { Protest_Riot } from "next/font/google";
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const page = () => {
  return (
   <div className={`${protestRiot.className} h-screen`}>
    <ComingSoon></ComingSoon>
   </div>
  )
}

export default page
