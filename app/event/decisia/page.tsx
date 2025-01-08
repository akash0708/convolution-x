import React from "react";
import HeroDecisia from "./HeroDecisia";
import EventNavbar from "@/components/EventNavbar";
import { Protest_Riot } from "next/font/google";
import AboutDecisia from "./AboutDecisia";
import Timeline from "./Timeline";
import Mentors from "./Mentors";
import PrizesDecisia from "./PrizesDecisia";
import EventLead from "./EventLead";
import FaqDecisia from "./FaqDecisia";
import PreFooter from "./PreFooter";
import Footer from "./Footer";

const protestRiot = Protest_Riot({
  subsets: ["latin"], 
  weight: "400", 
});
const page = () => {
  return (
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
        <PrizesDecisia></PrizesDecisia>
        <EventLead></EventLead>
        <FaqDecisia></FaqDecisia>
        <PreFooter></PreFooter>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default page;
