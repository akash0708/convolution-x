"use client";

import React, { Suspense, useEffect } from "react";
import HeroDecisia from "./HeroDecisia";
import EventNavbar from "@/components/EventNavbar";
import AboutDecisia from "./AboutDecisia";
import Timeline from "./Timeline";
import Mentors from "./Mentors";
import PrizesDecisia from "./PrizesDecisia";
import EventLead from "./EventLead";
import FaqDecisia from "./FaqDecisia";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import Judges from "./Judges";
import { Protest_Riot } from "next/font/google";
import { useUserStore } from "@/store/userStore";
import Loading from "@/app/loading";

const protestRiot = Protest_Riot({
  subsets: ["latin"], 
  weight: "400", 
});
const Page = () => {
  const{user,authCheck,loading,setIsLogged}=useUserStore();
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
    <Suspense fallback={ <Loading/>}>

      <div>
        <EventNavbar
          navTheme="bg-gradient-to-t from-[#DE5C00] via-[#77340F] 
      via-[#931308] to-[#5B0804]"
        ></EventNavbar>
        <div className={`${protestRiot.className}`}>
          <HeroDecisia/>
          <AboutDecisia></AboutDecisia>
          <Timeline></Timeline>
          <Mentors></Mentors>
          <Judges></Judges>
          <PrizesDecisia></PrizesDecisia>
          <EventLead></EventLead>
          <FaqDecisia></FaqDecisia>
          <PreFooter></PreFooter>
          <Footer></Footer>
        </div>
      </div>
    </Suspense>
    );
};

export default Page;
