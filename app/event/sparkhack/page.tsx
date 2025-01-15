"use client";
import React, { Suspense, useEffect } from "react";
import HeroSpark from "./HeroSpark";
import AboutSpark from "./AboutSpark";
import PreTimeline from "./PreTimeline";
import Timeline from "./Timeline";
import Mentors from "./Mentors";
import EventLead from "./EventLead";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import FaqSpark from "./FaqSpark";
import EventNavbar from "@/components/EventNavbar";
import PrizesSpark from "./PrizesSpark";
import { Protest_Riot } from "next/font/google";
import Loading from "@/app/loading";
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
      <div className="">
        <EventNavbar
          navTheme="bg-gradient-to-t from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF]"
        ></EventNavbar>
        <div className={`${protestRiot.className}`}>
          <HeroSpark></HeroSpark>
          <AboutSpark></AboutSpark>
          <PreTimeline></PreTimeline>
          <Timeline></Timeline>
          <Mentors></Mentors>
          <PrizesSpark></PrizesSpark>
          <EventLead></EventLead>
          <FaqSpark></FaqSpark>
          <PreFooter></PreFooter>
          <Footer></Footer>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
