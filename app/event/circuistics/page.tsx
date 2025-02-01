import React, { Suspense, useEffect } from 'react'
import ComingSoon from '@/components/ComingSoon'
import { Protest_Riot } from "next/font/google";
import Loading from '@/app/loading';
import HeroCircuistics from './HeroCircuistics';
import EventNavbar from '@/components/EventNavbar';
import AboutCircuistics from './AboutCircuistics';
import Timeline from './Timeline';
import Mentors from './Mentors';
import PrizesCircuistics from './PrizesCircuistics';
import EventLead from './EventLead';
import PostTimeline from './PostTimeline';
import FaqCircuistics from './FaqCircuistics';
import PreFooter from './PreFooter';
import Footer from './Footer';
import { useUserStore } from '@/store/userStore';
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const Page = () => {
  const { user, authCheck, loading, setIsLogged } = useUserStore();
    useEffect(() => {
      // if (!user && email && !isLogged) {
      //   setLoading(true)
      //   fetchUser(email);
      // }
      if (!user) {
        setIsLogged(true);
        authCheck();
      }
    }, [user]);
    if (loading) {
      return <Loading />;
    }
  return (
     <Suspense fallback={ <Loading/>}>
      <EventNavbar navTheme="bg-gradient-to-t from-[#3122B1] to-[#150E4B]"/>

   <div className={`${protestRiot.className} h-screen`}>
    {/* <ComingSoon></ComingSoon> */}
    <HeroCircuistics></HeroCircuistics>
    <AboutCircuistics/>
    <Timeline/>
    <PostTimeline/>
    <Mentors/>
    <PrizesCircuistics/>
    <EventLead/>
    <FaqCircuistics/>
    <PreFooter></PreFooter>
    <Footer/>
   </div>
     </Suspense>
  )
}

export default Page
