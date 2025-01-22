"use client";
import React, { Suspense, useEffect } from "react";
import ComingSoon from "@/components/ComingSoon";
import { Protest_Riot } from "next/font/google";
import Loading from "@/app/loading";
import HeroTalks from "./HeroTalks";
import EventNavbar from "@/components/EventNavbar";
import { useUserStore } from "@/store/userStore";
import AboutTalks from "./AboutTalks";
import TimelineTalks from "./TimelineTalks";
import FaqTalks from "./FaqTalks";
import Mentors from "./Mentors";
import EventLead from "./EventLead";
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
  if(true){
    return (
      <Suspense fallback={ <Loading/>}>

   <div className={`${protestRiot.className} h-screen`}>
    <ComingSoon></ComingSoon>
   </div>
     </Suspense>
    )
  }
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <EventNavbar
          navTheme="bg-gradient-to-t from-[#DE5C00] via-[#77340F] 
      via-[#931308] to-[#5B0804]"
        ></EventNavbar>

        <div className={`${protestRiot.className}`}>
          <HeroTalks />
          <AboutTalks />
          <TimelineTalks />
          <Mentors />
          This yr pannelists Previous edition
          <EventLead />
          <FaqTalks />
        </div>
      </div>
    </Suspense>
  );
};
export default Page;
