import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PreFooterImage from "@/components/PreFooterImage";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar/>
      <HomeHero/>
      <HomeAbout/>
      <PreFooterImage/>
      <Footer/>
    </div>
  );
}
