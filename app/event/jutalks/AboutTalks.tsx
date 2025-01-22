import Image from "next/image";
import React from "react";
import castle from "@/assets/images/JuTalks/castle.png"
const AboutTalks = () => {
  return (
    <div className=" py-12 relative  flex items-center  overflow-hidden">
      <div className="h-full w-full  maxWidthForSections">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#DDA6BC] via-[#E691B2] 
        via-[#ED7EAA] to-[#CB6990] -z-20"
        ></div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col justify-center">
            <h1 className=" md:text-left text-center text-3xl sm:text-5xl mb-8 text-white text-shadow-dark">
              About JU Talks
            </h1>
            <p className="text-lg text-white md:text-left text-center text-shadow-dark">
              Join us for ‘JU Talks’, a dynamic panel discussion featuring
              industry experts, veterans, and tech leaders exploring trends,
              challenges, and innovations shaping our world. Speakers will share
              unique insights and experiences, fostering an engaging exchange of
              ideas. This interactive event invites audience questions and
              encourages participation, sparking curiosity and offering students
              a fresh perspective on today’s world.
            </p>
          </div>
          <div className="md:flex justify-center hidden ">
            <Image src={castle} alt="castle" className="object-cover max-w-[450px]"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTalks;
