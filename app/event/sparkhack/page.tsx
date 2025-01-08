import React from "react";
import HeroSpark from "./HeroSpark";
import AboutSpark from "./AboutSpark";
import { Protest_Riot } from "next/font/google";
import PreTimeline from "./PreTimeline";
import Timeline from "./Timeline";
import Mentors from "./Mentors";
import EventLead from "./EventLead";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import FaqSpark from "./FaqSpark";
import EventNavbar from "@/components/EventNavbar";
import PrizesSpark from "./PrizesSpark";
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});



const page = () => {
  return (
    <div className="">
<EventNavbar navTheme='bg-gradient-to-t from-[#8FE3F0] via-[#67C6DD] 
    via-[#3AADD9] to-[#2CB1DF]'></EventNavbar>
      <div className={`${protestRiot.className}`}>
      <HeroSpark></HeroSpark>
      <AboutSpark ></AboutSpark>
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
    
  );
};

export default page;
