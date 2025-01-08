import React from "react";
import HeroDecisia from "./HeroDecisia";
import EventNavbar from "@/components/EventNavbar";
import { Protest_Riot } from "next/font/google";
import AboutDecisia from "./AboutDecisia";


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
      </div>
    </div>
  );
};

export default page;
