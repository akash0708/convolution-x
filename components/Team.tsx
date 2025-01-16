"use client";
import Image from "next/image";
import React from "react";
import whiteStar from "@/assets/images/Footer/stars white.webp";
import asteroidRinged from "@/assets/images/Footer/asteroid ringed.webp";
import pinkBluePlanet from "@/assets/images/HeroSectionImages/pink-blue planet.webp";
import cloud1 from "@/assets/images/HeroSectionImages/cloud1.webp";
import cloud2 from "@/assets/images/HeroSectionImages/cloud2.webp";
// import yellowRocket from "@/assets/images/Footer/rocket4.webp";
import pinkrocket from "@/assets/images/Team/rocket.webp";
import whiteStarPhone from "@/assets/images/phone white stars.webp";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import { Tilt } from "react-tilt";

interface TiltOptions {
  reverse: boolean; // Reverse the tilt direction
  max: number; // Max tilt rotation (degrees)
  perspective: number; // Transform perspective
  scale: number; // Scale effect
  speed: number; // Speed of enter/exit transition
  transition: boolean; // Enable/disable transition
  axis: "X" | "Y" | null; // Disabled axis, can be "X", "Y", or null
  reset: boolean; // Reset tilt effect on exit
  easing: string; // Easing function
}

const defaultOptions: TiltOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

type TeamMember = {
  name: string;
  post: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Jahid Mamud",
    post: "Secretary",
    image: "jahid.png",
    linkedin: "https://www.linkedin.com/in/jahid-mamud/",
    instagram:
      "https://www.instagram.com/jem_.__/profilecard/?igsh=b2o0ZjlqZ3pkeW5t",
    facebook: "",
  },
  {
    name: "Ritam Kundu",
    post: "Joint secretary",
    image: "ritam.png",
    linkedin:
      "https://www.linkedin.com/in/ritam-kundu-394612257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/ritamkundu.__/profilecard/?igsh=MTJxZ2NibmMxcW1pNw==",
    facebook: "",
  },
  {
    name: "Siddhanta Ghosh",
    post: "Treasurer",
    image: "sid.png",
    linkedin: "https://www.linkedin.com/in/siddhanta-ghosh",
    instagram: "https://www.instagram.com/ghosh_siddhanta2k3/",
    facebook:
      "https://www.facebook.com/profile.php?id=100089382764364&mibextid=ZbWKwL",
  },
  {
    name: "Akash Bag",
    post: "Tech Lead",
    image: "akash.png",
    linkedin: "https://www.linkedin.com/in/akashbag0903/",
    instagram: "https://www.instagram.com/akash09.dev/",
    facebook: "",
  },
  {
    name: "Arindam Pradhan",
    post: "Design Lead",
    image: "arindam.png",
    linkedin:
      "https://www.linkedin.com/in/arindam-pradhan/?originalSubdomain=in",
    instagram: "https://www.instagram.com/arindam_ju01/",
    facebook: "",
  },
  {
    name: "Aritra Kumar Dutta",
    post: "Sponsorship Lead",
    image: "aritra.png",
    linkedin:
      "https://www.linkedin.com/in/aritra-dutta-1752b4304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/_travelling.tesla/profilecard/?igsh=cnJpM3BtMzkycW90",
    facebook: "https://www.facebook.com/share/19VD7DQ6Ei/",
  },
  {
    name: "Reejul Chattaraj",
    post: "Content Lead",
    image: "rc.png",
    linkedin:
      "https://www.linkedin.com/in/reejul-chattaraj-85a09727a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/_reeejul?igsh=MW8xNG51N3pnbDNpMw%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/19gMsP3Ce7/?mibextid=LQQJ4d",
  },
  {
    name: "Sinjan Dinda",
    post: "Logistics Lead",
    image: "dinda.png",
    linkedin:
      "https://www.linkedin.com/in/sinjan-dinda-a70861276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/dinda_sinjan?igsh=bWc4eGJnMDJ0MTc4",
    facebook: "https://www.facebook.com/share/15soztURSb/",
  },
  {
    name: "Arunava Roy",
    post: "PR Lead",
    image: "arunava.png",
    linkedin:
      "https://www.linkedin.com/in/arunava-roy-176a4527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/arunava_roy_10/profilecard/?igsh=MTA0azFiODJsa2huMw==",
    facebook: "https://www.facebook.com/share/1BLg4SPrKK/",
  },
];

const Team: React.FC = () => {
  return (
    <div id="team" className="relative py-20 ">
      <div className="bg-darkBlue absolute -z-10 top-0 bottom-0 w-full">
        <div className="animate-twinkle">
          <Image
            src={whiteStar}
            alt="white star bg "
            className="sm:block hidden"
          ></Image>
          <Image
            src={whiteStar}
            alt="white star bg"
            className="-scale-100 sm:block hidden"
          ></Image>
          <Image
            src={whiteStarPhone}
            alt="white star bg"
            className=" w-screen sm:hidden"
          ></Image>
          <Image
            src={whiteStarPhone}
            alt="white star bg"
            className="-scale-100 w-screen sm:hidden"
          ></Image>
        </div>

        <div className="">
          {/* --------------left Clouds------------ */}
          <Image
            src={cloud2}
            alt="Rotating Rockets"
            className="absolute top-0 left-0 w-[50vw] h-auto "
          ></Image>
          <Image
            src={cloud1}
            alt="Rotating Rockets"
            className="absolute top-0 left-0 w-[35vw] h-auto "
          ></Image>
          {/* --------------right Clouds------------ */}
          <Image
            src={cloud2}
            alt="Rotating Rockets"
            className="absolute top-0 right-0 w-[50vw] h-auto scale-x-[-1]"
          ></Image>
          <Image
            src={cloud1}
            alt="Rotating Rockets"
            className="absolute top-0 right-0 w-[35vw] h-auto scale-x-[-1]"
          ></Image>{" "}
        </div>

        {/* ----------------------pink Rocket--------------- */}
        <div>
          <Image
            src={pinkrocket}
            alt="Asteroid"
            className="absolute left-[5%]  bottom-[15%]   w-20 object-cover"
          ></Image>
        </div>

        {/* ----------------------------asteroid ringed---------------- */}
        <div>
          <Image
            src={asteroidRinged}
            alt="Asteroid"
            className="absolute right-[15%] z-30 bottom-[20%] animate-float opacity-80  w-[25vw] object-cover"
          ></Image>
        </div>
        {/* ----------------------huge pink blue planet ------------------------- */}
        <div>
          <Image
            src={pinkBluePlanet}
            alt="Asteroid"
            className="absolute left-[-10%] z-30 top-[5%] animate-float-slow opacity-80  w-[30vw] object-cover"
          ></Image>
        </div>
      </div>

      <div className=" maxWidthForSections ">
        <h1 className="sm:text-5xl text-3xl text-center text-white">
          Meet Our Team
        </h1>
        {/* ------------ this for mobile- ------------------- */}
        <div className="mt-12  sm:hidden flex flex-wrap justify-center sm:gap-6 sm:gap-y-8 gap-y-4 gap-2">
          {teamMembers.map((member) => (
            <div className="" key={member.name}>
              <div className="backdrop-blur-sm sm:h-[280px] w-[43vw] px-2 py-8 flex-col  flex justify-center items-center bg-white/20  rounded-xl shadow-white/40 shadow-md">
                <div className="flex justify-center">
                  <Image
                    src={`/peoplePics/` + member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="size-24 rounded-full object-cover "
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <h2 className=" text-white text-sm mt-2 ">
                    {member.name}
                  </h2>
                  <p className="text-xs text-white/80">{member.post}</p>
                  <div className="card-actions flex gap-2 justify-evenly mt-2">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaInstagram className="size-6 text-white"></FaInstagram>
                    </a>
                    {member.facebook &&<a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaFacebookSquare className="size-6 text-white" />
                    </a>}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaLinkedin className="size-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ----------this for bigger screens------------- */}
        <div className="mt-12 hidden sm:flex flex-wrap justify-center sm:gap-6 sm:gap-y-8 gap-y-4 gap-2">
          {teamMembers.map((member) => (
            <div className="" key={member.name}>
              <Tilt
                options={defaultOptions}
                className="sm:block hidden relative w-[220px] h-[280px] bg-white/5 bg-base-100  rounded-xl shadow-black/20 shadow-md backdrop-blur-md overflow-hidden teamCard"
              >
                <div className="card px-4 py-8 flex-col flex justify-center items-center absolute top-0 right-0 left-0   cardContent">
                  <div className="flex justify-center">
                    <Image
                      src={`/peoplePics/` + member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="size-28 rounded-full object-cover "
                    />
                  </div>
                  <div className=" flex flex-col items-center">
                    <h2 className=" text-white mt-2 ">
                      {member.name}
                    </h2>
                    <p className="text-sm text-white/80">{member.post}</p>
                    <ul className="sci card-actions flex gap-2 justify-evenly mt-4">
                      <li
                        className=""
                        style={{ "--i": 1 } as React.CSSProperties}
                      >
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram className="size-6 text-white/80" />
                        </a>
                      </li>
                      <li
                        className=""
                        style={{ "--i": 2 } as React.CSSProperties}
                      >
                        {member.facebook &&<a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookSquare className="size-6 text-white/80" />
                        </a>}
                      </li>
                      <li
                        className=""
                        style={{ "--i": 3 } as React.CSSProperties}
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="size-6 text-white/80" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
