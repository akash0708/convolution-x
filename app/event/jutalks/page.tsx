"use client";
import React, { Suspense, useEffect } from "react";
import ComingSoon from "@/components/ComingSoon";
import { Protest_Riot } from "next/font/google";
import Loading from "@/app/loading";
import HeroTalks from "./HeroTalks";
import { useUserStore } from "@/store/userStore";
import AboutTalks from "./AboutTalks";
import TimelineTalks from "./TimelineTalks";
import FaqTalks from "./FaqTalks";
import Mentors from "./Mentors";
import EventLead from "./EventLead";
import JuTalksNavbar from "./JuTalksNavbar";
import Pannels from "./Pannels";
import PreFooterImage from "./PreFooterImage";
import Footer from "./Footer";
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
  // if(true){
  //   return (
  //     <Suspense fallback={ <Loading/>}>

  //  <div className={`${protestRiot.className} h-screen`}>
  //   <ComingSoon></ComingSoon>
  //  </div>
  //    </Suspense>
  //   )
  // }
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <JuTalksNavbar
          navTheme="bg-gradient-to-t from-[#DDA6BC] via-[#E691B2] 
        via-[#ED7EAA] to-[#CB6990]"
        ></JuTalksNavbar>

        <div className={`${protestRiot.className}`}>
          <HeroTalks />
          <AboutTalks />
          <TimelineTalks />
          <Mentors />
          <Pannels/>
          <EventLead />
          <FaqTalks />
          <PreFooterImage/>
          <Footer/>
        </div>
      </div>
    </Suspense>
  );
};
export default Page;
