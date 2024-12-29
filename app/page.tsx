import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PreFooterImage from "@/components/PreFooterImage";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <Events />
      <Team />
      <Sponsors/>
      <FAQ />
      <PreFooterImage />
      <Footer />
    </div>
  );
}
