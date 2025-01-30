import React from "react";

import Image from "next/image";
import EventHero from "@/components/EventHero";
import heroBg from "@/assets/images/Inquizzitive/heroTop.png"
import heroBgBottom from "@/assets/images/Inquizzitive/heroBottom.png"
import pixelBox from "@/assets/images/Inquizzitive/pixelBox.png"
import pixel1 from "@/assets/images/Inquizzitive/pixel1.png"
import pixel2 from "@/assets/images/Inquizzitive/pixel2.png"

const aboutDecisia = `Inquizzitive is an exciting quiz competition organized to challenge participants’ knowledge across a variety of topics, including general knowledge, current affairs, science, history, and music. It promotes curiosity, learning, and team spirit.`;
const HeroQuiz = () => {
    return (
        <div
          id="about"
          className="min-h-screen pt-24 md:pt-0 flex justify-center items-center overflow-hidden relative
      
      "
        >
          {/* ----------------------for all the snowflakes and stuff------------------- */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#1A0F52] -z-20">
            {/* ----------------for bg image--------------- */}
           
          </div>
          <Image src={heroBg} alt="hero" className="absolute md:top-20 top-16 right-0 -z-10" />
          <Image src={heroBgBottom} alt="hero" className="absolute bottom-0 left-0 -z-10" />
          <Image src={pixelBox} alt="hero" className="absolute top-[2%] left-[-5%] -z-10 object-cover max-w-[350px] min-w-[200px] w-[20vw]" />
          
          <Image src={pixelBox} alt="hero" className="absolute bottom-0 right-[-5%] -z-10 object-cover max-w-[320px] min-w-[200px] w-[20vw]" />

          <Image src={pixel1} alt="hero" className="absolute sm:bottom-[20%] sm:right-[37%] -z-10 object-cover max-w-[100px] w-[20vw] bottom-[60%] right-[0%]" />
          <Image src={pixel2} alt="hero" className="absolute sm:top-[25%] sm:left-[40%] top-[80%] left-[3%] -z-10 object-cover max-w-[50px]  w-[20vw]" />
    
          {/* ---------main content---------- */}
          <div className="h-full w-full  maxWidthForSections sm:pb-4 pb-12">
            <EventHero
            textColor="text-white"
              registeredUiBtn="bg-[#ffff] text-[#34246B]"
              about={aboutDecisia}
              logo="/Inquizzitive/logo.png"
              buttonDesign="shadow-white/70 hover:shadow-white/30  hover:bg-[#34246B] bg-[#ffff]  hover:text-white text-[#34246B]"
              planet="/Inquizzitive/planet.png"
              mode="team"
              name="inquizzitive"
            ></EventHero>
          </div>
        </div>
      );
}

export default HeroQuiz
