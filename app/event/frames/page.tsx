"use client";
import React, { Suspense, useEffect } from 'react'
import ComingSoon from '@/components/ComingSoon'
import { Protest_Riot } from "next/font/google";
import Loading from '@/app/loading';
import HeroFrames from './HeroFrames';
import AboutFrames from './AboutFrames';
import EventLead from './EventLead';
import FaqFrames from './FaqFrames';
import EventNavbar from '@/components/EventNavbar';
import Footer from './Footer';
import Timeline from './Timeline';
import Mentors from './Mentors';
import PrizesFrames from './PrizesFrames';
import PreFooter from './PreFooter';
import { useUserStore } from '@/store/userStore';
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const Page = () => {
  const { user, authCheck, loading, setIsLogged } = useUserStore();
      useEffect(() => {
        
        if (!user) {
          setIsLogged(true);
          authCheck();
        }
      }, [user]);
      if (loading) {
        return <Loading />;
      }
  return (
     <Suspense fallback={ <Loading/>}>
<EventNavbar
          navTheme="bg-gradient-to-b from-[#3e8df7] via-[#709dfd] via-[#829ffb] via-[#b8b1fc] via-[#948ded]  to-[#795ff4] "
        ></EventNavbar>
   <div className={`${protestRiot.className} h-screen`}>
    {/* <ComingSoon></ComingSoon> */}
    <HeroFrames/>
    <AboutFrames/>
    <Timeline/>
    <Mentors/>
    <PrizesFrames/>
    <EventLead/>
    <FaqFrames/>
    <PreFooter/>
    <Footer/>
   </div>
     </Suspense>
  )
}

export default Page
