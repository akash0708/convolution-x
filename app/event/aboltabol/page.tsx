import React from 'react'
import { Protest_Riot } from "next/font/google";
import EventNavbar from "@/components/EventNavbar";
import HeroAT from './HeroAT';
import AboutAT from './AboutAT';
import TimelineAT from './TimelineAT';
import Mentors from './Mentors';
import PrizesAT from './PrizesAT';
import EventLead from './EventLead';
import FaqAT from './FaqAT';
import PreFooter from './PreFooter';
import Footer from './Footer';

const protestRiot = Protest_Riot({
  subsets: ["latin"], 
  weight: "400", 
});
const page = () => {
  return (
    <div>
     <EventNavbar
        navTheme="bg-gradient-to-t from-[#0215C5] to-[#020F92] 
    ]"
      ></EventNavbar>
      <div className={`${protestRiot.className}`}>
        <HeroAT></HeroAT>
        <AboutAT></AboutAT>
        <TimelineAT></TimelineAT>
        <Mentors></Mentors>
        <PrizesAT></PrizesAT>
        <EventLead></EventLead>
        <FaqAT></FaqAT>
        <PreFooter></PreFooter>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
