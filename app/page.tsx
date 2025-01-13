import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PreFooterImage from "@/components/PreFooterImage";
import Sponsors from "@/components/Sponsors";
// import Sponsors from "@/components/Sponsors2";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import { Protest_Riot } from "next/font/google";
const protestRiot = Protest_Riot({
  subsets: ["latin"], // You can specify subsets if needed
  weight: "400", // Adjust the weight based on your requirements
});
export default function Home() {
  return (
    <div className="relative overflow-x-hidden custom-scrollbar ">
      {/* <Events /> */}
      <Navbar />
      <div className={`${protestRiot.className}`}>

      <HomeHero />
      <HomeAbout />
      <Events/>
      <Timeline></Timeline>
      <Team />
      <Sponsors/>
      {/* ----------------note that the slider hover has been commented for optimisation */}
      <FAQ />
      <PreFooterImage /> 
      <Footer />
      </div>
    </div>
  );
}
