"use client";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PreFooterImage from "@/components/PreFooterImage";
import Sponsors from "@/components/Sponsors";
// import Sponsors from "@/components/Sponsors2";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import { useUserStore } from "@/store/userStore";
import { Protest_Riot } from "next/font/google";
import Cookies from "js-cookie";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});
export default function Home() {
  const { user, isLogged, loading, authCheck, fetchUser } = useUserStore();
  // const userCookie = Cookies.get("user");
  // const email = userCookie ? JSON.parse(userCookie).email : null;
  useEffect(() => {
    // if (!user && email && !isLogged) {
    //   setLoading(true)
    //   fetchUser(email);
    // }
    if (!user) authCheck();
  }, []);

  if (loading) {
    return (<Loading />);
  }
  // get the username form zustand, for now use email
  else
    return (
      <Suspense fallback={<Loading />}>
        <div className="relative overflow-x-hidden custom-scrollbar ">
          {/* <Events /> */}
          <Navbar />
          <div className={`${protestRiot.className}`}>
            <HomeHero />
            <HomeAbout />
            <Events />
            <Timeline></Timeline>
            <Team />
            <Sponsors />
            <Gallery></Gallery>
            {/* ----------------note that the slider hover has been commented for optimisation */}
            <FAQ />
            <PreFooterImage />
            <Footer />
          </div>
        </div>
      </Suspense>
    );
}
