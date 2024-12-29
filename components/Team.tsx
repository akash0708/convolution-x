"use client"
import Image from "next/image";
import React from "react";
import whiteStar from "@/assets/images/Footer/stars white.png";
import asteroidRinged from "@/assets/images/Footer/asteroid ringed.png";
import pinkBluePlanet from "@/assets/images/HeroSectionImages/pink-blue planet.png";
// import yellowRocket from "@/assets/images/Footer/rocket4.png";
import pinkrocket from '@/assets/images/Team/rocket.png'

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import { Tilt } from 'react-tilt'

interface TiltOptions {
  reverse: boolean;          // Reverse the tilt direction
  max: number;               // Max tilt rotation (degrees)
  perspective: number;       // Transform perspective
  scale: number;             // Scale effect
  speed: number;             // Speed of enter/exit transition
  transition: boolean;       // Enable/disable transition
  axis: "X" | "Y" | null;    // Disabled axis, can be "X", "Y", or null
  reset: boolean;            // Reset tilt effect on exit
  easing: string;            // Easing function
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
    name: "Ritam Kundu",
    post: "Joint secretary",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387704/IMG_7737_-_Ritam_Kundu_kwkd1w.jpg",
    linkedin:
      "https://www.linkedin.com/in/ritam-kundu-394612257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/ritamkundu.__/profilecard/?igsh=MTJxZ2NibmMxcW1pNw==",
    facebook: "",
  },
  {
    name: "Siddhanta Ghosh",
    post: "Treasurer",
    image: "https://res.cloudinary.com/dybvod0l2/image/upload/v1735440589/RI2_9702_-_Siddhanta_Ghosh_kun6bu.jpg",
    linkedin: "https://www.linkedin.com/in/siddhanta-ghosh",
    instagram: "https://www.instagram.com/ghosh_siddhanta2k3/",
    facebook: "https://www.facebook.com/profile.php?id=100089382764364&mibextid=ZbWKwL",
  },

  {
    name: "Arindam Pradhan",
    post: "Design Lead",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387702/WhatsApp_Image_2024-12-28_at_10.03.24_-_Arindam_Pradhan_etjnft.jpg",
    linkedin:
      "https://www.linkedin.com/in/arindam-pradhan/?originalSubdomain=in",
    instagram: "https://www.instagram.com/arindam_ju01/",
    facebook: "",
  },
  {
    name: "Reejul Chattaraj",
    post: "Content Lead",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387702/IMG_6495_-_Reejul_Chattaraj_lelnnp.jpg",
    linkedin:
      "https://www.linkedin.com/in/reejul-chattaraj-85a09727a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/_reeejul?igsh=MW8xNG51N3pnbDNpMw%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/19gMsP3Ce7/?mibextid=LQQJ4d",
  },
  {
    name: "Jahid Mamud",
    post: "Secretary",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387703/WhatsApp_Image_2024-12-28_at_10.27.44_-_Jahid_frcaii.jpg",
    linkedin: "www.linkedin.com/in/jahid-mamud",
    instagram:
      "https://www.instagram.com/jem_.__/profilecard/?igsh=b2o0ZjlqZ3pkeW5t",
    facebook: "",
  },
  {
    name: "Sinjan Dinda",
    post: "Logistics Lead",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387702/link_-_Sinjan_Dinda_viyusr.png",
    linkedin:
      "https://www.linkedin.com/in/sinjan-dinda-a70861276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/dinda_sinjan?igsh=bWc4eGJnMDJ0MTc4",
    facebook: "https://www.facebook.com/share/15soztURSb/",
  },
  {
    name: "Arunava Roy",
    post: "PR Lead",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387703/profile_pic_-_Arunava_Roy_tam9so.jpg",
    linkedin:
      "https://www.linkedin.com/in/arunava-roy-176a4527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/arunava_roy_10/profilecard/?igsh=MTA0azFiODJsa2huMw==",
    facebook: "https://www.facebook.com/share/1BLg4SPrKK/",
  },
  {
    name: "Aritra Kumar Dutta",
    post: "Sponsorship Lead",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387701/IMG-20241214-WA0024_-_ARITRA_DUTTA_wtizxj.jpg",
    linkedin:
      "https://www.linkedin.com/in/aritra-dutta-1752b4304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/_travelling.tesla/profilecard/?igsh=cnJpM3BtMzkycW90",
    facebook: "https://www.facebook.com/share/19VD7DQ6Ei/",
  },
  {
    name: "Akash Bag",
    post: "Tech Lead",
    image:
      "https://res.cloudinary.com/dybvod0l2/image/upload/v1735387703/WhatsApp_Image_2024-12-28_at_5.21.01_PM_-_Akash_Bag_tvmum6.jpg",
    linkedin: "https://www.linkedin.com/in/akashbag0903/",
    instagram: "https://www.instagram.com/akash09.dev/",
    facebook: "",
  },
];

const Team: React.FC = () => {
  return (
    <div id="team" className="relative py-16">
      <div className="bg-darkBlue absolute -z-10 top-0 bottom-0 w-full">
        <div className="animate-twinkle">

        <Image src={whiteStar} alt="white star bg "></Image>
        <Image
          src={whiteStar}
          alt="white star bg"
          className="-scale-100"
        ></Image>
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
        {/* --------------------------huge pink blue planet ------------------------- */}
        <div>
          <Image
            src={pinkBluePlanet}
            alt="Asteroid"
            className="absolute left-[-10%] z-30 top-[0%] animate-float opacity-80  w-[30vw] object-cover"
          ></Image>
        </div>
      </div>

      <div className=" maxWidthForSections">
        <h1 className="text-3xl font-bold text-center text-white">
          Meet Our Team
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-6 gap-y-8">
          {teamMembers.map((member) => (
            <div className="" key={member.name}>
                {/* --------------- this for mobile-------------------- */}
{/*               
               <div
                className="card backdrop-filter teamCardbackdrop-blur-sm w-full max-w-[220px] h-[280px] px-4 py-8 flex-col sm:hidden flex justify-center items-center bg-white/20 bg-base-100  rounded-xl shadow-black/60 shadow-md ">
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={200}
                    className="size-28 rounded-full object-cover "
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <h2 className=" text-white mt-2 font-semibold">{member.name}</h2>
                  <p className="text-sm text-white/80">{member.post}</p>
                  <div className="card-actions flex gap-2 justify-evenly mt-4">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconBoxes"
                    >
                      <FaInstagram></FaInstagram>
                    </a>
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconBoxes"
                    >
                      <FaFacebookF/>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconBoxes"
                    >
                      <FaLinkedinIn/>
                    </a>
                  </div>
                </div>
              </div> 
              */}

              {/* ----------this for bigger screens------------- */}
            <Tilt options={defaultOptions}
              className=" relative w-[220px] h-[280px] bg-white/5 bg-base-100  rounded-xl shadow-black/20 shadow-md backdrop-blur-md overflow-hidden teamCard"
              
            >
              <div className="card px-4 py-8 flex-col flex justify-center items-center absolute top-0 right-0 left-0   cardContent">
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={200}
                    className="size-28 rounded-full object-cover "
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <h2 className=" text-white mt-2 font-semibold">
                    {member.name}
                  </h2>
                  <p className="text-sm text-white/80">{member.post}</p>
                  <ul className="sci card-actions flex gap-2 justify-evenly mt-6">
                    <li className="" style={{ "--i": 1 } as React.CSSProperties}>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="size-6 text-white/80" />
                      </a>
                    </li>
                    <li className="" style={{ "--i": 2 } as React.CSSProperties}>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookSquare className="size-6 text-white/80" />
                      </a>
                    </li>
                    <li className="" style={{ "--i": 3 } as React.CSSProperties}>
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
