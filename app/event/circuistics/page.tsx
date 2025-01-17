import React, { Suspense } from 'react'
import ComingSoon from '@/components/ComingSoon'
import { Protest_Riot } from "next/font/google";
import Loading from '@/app/loading';
import HeroCircuistics from './HeroCircuistics';
import EventNavbar from '@/components/EventNavbar';
import AboutCircuistics from './AboutCircuistics';
import Timeline from './Timeline';
import Mentors from './Mentors';
import PrizesCircuistics from './PrizesCircuistics';
import EventLead from './EventLead';
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const Page = () => {
  return (
     <Suspense fallback={ <Loading/>}>
      {/* <EventNavbar navTheme="bg-gradient-to-b from-[#3122B1] to-[#150E4B]"/> */}

   <div className={`${protestRiot.className} h-screen`}>
    <ComingSoon></ComingSoon>
    {/* <HeroCircuistics></HeroCircuistics>
    <AboutCircuistics/>
    <Timeline/>
    <Mentors/>
    <PrizesCircuistics/>
    <EventLead/> */}
   </div>
     </Suspense>
  )
}

export default Page
