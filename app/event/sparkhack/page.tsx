import Link from "next/link";
import React from "react";
import HeroSpark from "./HeroSpark";
import Navbar from "@/components/Navbar";
import AboutSpark from "./AboutSpark";
import { Protest_Riot,Poppins  } from "next/font/google";
import PreTimeline from "./PreTimeline";
import Timeline from "./Timeline";
import Mentors from "./Mentors";
import EventLead from "./EventLead";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});



const page = () => {
  return (
    <div className="">
      <Navbar/>
      <div className={`${protestRiot.className}`}>

      <HeroSpark></HeroSpark>
      <AboutSpark></AboutSpark>
      <PreTimeline></PreTimeline>
      <Timeline></Timeline>
      <Mentors></Mentors>
      <EventLead></EventLead>
      <PreFooter></PreFooter>
      <Footer></Footer>
      </div>
    </div>
    
  );
};

export default page;
