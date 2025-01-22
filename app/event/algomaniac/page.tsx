"use client";
import React, { Suspense, useEffect } from "react";
import ComingSoon from "@/components/ComingSoon";
import { Protest_Riot } from "next/font/google";
import Loading from "@/app/loading";
import HeroAlgomaniac from "./HeroAlgomaniac";
import AboutAlgomaniac from "./AboutAlgomaniac";
import TimelineAlgo from "./TimelineAlgo";
import EventNavbar from "@/components/EventNavbar";
import EventLead from "./EventLead";
import FaqAlgo from "./FaqAlgo";
import PrizesAlgo from "./PrizesAlgo";
import Mentors from "./Mentors";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import { useUserStore } from "@/store/userStore";
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const Page = () => {
  const { user, authCheck,setIsLogged, loading } = useUserStore();
    useEffect(() => {
      // if (!user && email && !isLogged) {
      //   setLoading(true)
      //   fetchUser(email);
      // }
     if (!user) {
          setIsLogged(true)
          authCheck();}
      
    }, [user]);
    if (loading) {
      return <Loading />;
    }
  return (
    <Suspense fallback={<Loading />}>
      <EventNavbar
        navTheme="bg-gradient-to-t from-[#DE5C00] via-[#77340F] 
      via-[#931308] to-[#5B0804]"
      ></EventNavbar>
      <div className={`${protestRiot.className} h-screen`}>
        {/* <ComingSoon></ComingSoon> */}
        <HeroAlgomaniac></HeroAlgomaniac>
        <AboutAlgomaniac />
        <TimelineAlgo />
        <Mentors />
        <PrizesAlgo />
        <EventLead />
        <FaqAlgo />
        <PreFooter />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Page;
