import React, { Suspense } from 'react'
import ComingSoon from '@/components/ComingSoon'
import { Protest_Riot } from "next/font/google";
import Loading from '@/app/loading';
import HeroFrames from './HeroFrames';
import AboutFrames from './AboutFrames';
import EventLead from './EventLead';
import FaqFrames from './FaqFrames';
import EventNavbar from '@/components/EventNavbar';
import Footer from './Footer';
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const page = () => {
  return (
     <Suspense fallback={ <Loading/>}>
{/* <EventNavbar
          navTheme="bg-gradient-to-t from-[#DE5C00] via-[#77340F] 
      via-[#931308] to-[#5B0804]"
        ></EventNavbar> */}
   <div className={`${protestRiot.className} h-screen`}>
    <ComingSoon></ComingSoon>
    {/* <HeroFrames/>
    <AboutFrames/>
    <EventLead/>
    <FaqFrames/>
    <Footer/> */}
   </div>
     </Suspense>
  )
}

export default page
