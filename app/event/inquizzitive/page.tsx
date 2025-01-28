"use client";
import React, { Suspense, useEffect } from "react";
// import ComingSoon from "@/components/ComingSoon";
import { Protest_Riot } from "next/font/google";
import Loading from "@/app/loading";
import HeroQuiz from "./HeroQuiz";
import Mentors from "./Mentors";
import Prizes from "./Prizes";
import FaqQuiz from "./FaqQuiz";
import Footer from "./Footer";
import EventLead from "./EventLead";
import AboutQuiz from "./AboutQuiz";
import QuizNavbar from "./QuizNavbar";
import { useUserStore } from "@/store/userStore";
import QuizMaster from "./QuizMaster";
import Timeline from "./Timeline";
import PreFooter from "./PreFooter";
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
  return (
    <Suspense fallback={<Loading />}>
      <QuizNavbar
          navTheme="bg-[#1A0F52] "
        ></QuizNavbar>
      <div className={`${protestRiot.className} h-screen`}>
        {/* <ComingSoon></ComingSoon> */}
      <HeroQuiz />
      <AboutQuiz/>
      <Timeline/>
      <Mentors />
      <QuizMaster/>
      <Prizes />
      <EventLead/>
      <FaqQuiz />
      <PreFooter/>
      <Footer />
      </div>
    </Suspense>
  );
};

export default Page;
