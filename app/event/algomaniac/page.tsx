import React, { Suspense } from 'react'
import ComingSoon from '@/components/ComingSoon'
import { Protest_Riot } from "next/font/google";
import Loading from '@/app/loading';
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const page = () => {
  return (
     <Suspense fallback={ <Loading/>}>

   <div className={`${protestRiot.className} h-screen`}>
    <ComingSoon></ComingSoon>
   </div>
     </Suspense>
  )
}

export default page
