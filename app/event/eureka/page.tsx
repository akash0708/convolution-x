import React, { Suspense } from 'react'
import { Protest_Riot } from "next/font/google";
import Loading from '@/app/loading';
import EventNavbar from '@/components/EventNavbar';
import EventLead from './EventLead';
import Mentors from './Mentors';
import HomeEureka from './HomeEureka';
import AboutEureka from './AboutEureka';
import FaqEureka from './FaqEureka';
import Timeline from './Timeline';
import PreFooter from './PreFooter';
import Footer from './Footer';
import Prizes from './Prizes';
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});

const Page = () => {
  return (
     <Suspense fallback={ <Loading/>}>
<EventNavbar
        navTheme="bg-gradient-to-b from-[#8b9216] via-[#a79f0f] via-[#eda421] via-[#e98604] to-[#df3908]"
      ></EventNavbar>
   <div className={`${protestRiot.className} h-screen`}>
    {/* <ComingSoon></ComingSoon> */}
    <HomeEureka/>
    <AboutEureka/>
    <Timeline/>
    <Mentors />
<Prizes/>
    <EventLead />
    <FaqEureka/>
    <PreFooter/>
    <Footer/>

   </div>
     </Suspense>
  )
}

export default Page
