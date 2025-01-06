import Link from "next/link";
import React from "react";
import HeroSpark from "./HeroSpark";
import Navbar from "@/components/Navbar";
import AboutSpark from "./AboutSpark";
import { Protest_Riot } from "next/font/google";
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
      </div>
    </div>
    // <div className="relative">
    //   Sparkhack
    //   <Link href="/event/register?eventName=sparkhack">Register</Link>
    // </div>
  );
};

export default page;
