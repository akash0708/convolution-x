import Image from "next/image";
import React from "react";
// import whiteStar from '@/assets/images/Footer/stars white.webp'
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import asteroidYellow from "@/assets/images/Footer/asteroid 2.webp";
import asteroidBlue from "@/assets/images/Footer/asteroid 1.webp";
import ringedPlanet from "@/assets/images/Footer/mid planet.webp";
import bluePlanet from "@/assets/images/Footer/blue planet.webp";
import yellowRocket from "@/assets/images/Footer/rocket4.webp";
import ConvoIcon from "@/assets/images/HeroSectionImages/ConvoSvg.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import whiteStarPhone from "@/assets/images/phone white stars.webp"
import Link from "next/link";

const events = [
  { name: "Algomaniac", href: "/event/algomaniac" },
  { name: "Abol Tabol", href: "/event/aboltabol" },
  { name: "Circuistics", href: "/event/circuistics" },
  { name: "Decisia", href: "/event/decisia" },
  { name: "Eureka", href: "/event/eureka" },
  { name: "Sparkhack", href: "/event/sparkhack" },
  { name: "Inquizzitive", href: "/event/inquizzitive" },
  { name: "JU Talks", href: "/event/jutalks" },
  { name: "24 Frames", href: "/event/frames" },
];

const Footer = () => {

  // ------------------------------add mail to ----------------
  // const handleEmailClick = () => {
  //     const recipient = "convolutionx2025@gmail.com"; 
  //     window.location.href = `mailto:${recipient}`;
  //   };
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      <div className="absolute  top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2  animate-twinkle -z-30">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="absolute object-cover w-full sm:opacity-100 opacity-0  bottom-0 left-0"
        />
        <Image
          src={whiteStarPhone}
          alt="Picture pink stars"
          className="absolute object-cover w-full opacity-visible sm:opacity-0 top-1/2 left-0"
        />
      </div>
      <div className="absolute  top-0 left-0 w-full h-full  bg-gradient-to-t from-[#0B0E3D] to-darkBlue -z-20 ">
       
      {/* ----------------------ringed planet--------------- */}
      <div>
        <Image
          src={ringedPlanet}
          alt="Asteroid"
          className="absolute lg:right-[30%]  lg:bottom-[15%] top-[40%] right-[-5%] animate-float-slow  sm:w-36 w-[20vw] object-cover"
        ></Image>
      </div>
      {/* ----------------------yellow Rocket--------------- */}
      <div>
        <Image
          src={yellowRocket}
          alt="Asteroid"
          className="absolute md:left-[25%]  md:top-[15%] right-10 top-10 w-12  sm:w-16 llgw-20 object-cover"
        ></Image>
      </div>
      {/* ----------------------blue asteroid--------------- */}
      <div>
        <Image
          src={asteroidBlue}
          alt="Asteroid"
          className="absolute md:left-[3%] left-[3%] bottom-[15%] sm:left-[20%] animate-spin-slow  w-20 object-cover"
        ></Image>
      </div>
      {/* ------------------------blue planet-------------- */}
      <div>
        <Image
          src={bluePlanet}
          alt="Asteroid"
          className="absolute left-1/3 bottom-1 animate-spin-slow-ccw  w-12 object-cover"
        ></Image>
      </div>
      {/* ---------------yellow asteroid----------------- */}
      <div>
        <Image
          src={asteroidYellow}
          alt="Asteroid"
          className="absolute -right-10 -bottom-10 animate-float-slow w-32 sm:w-44 lg:w-64 object-cover"
        ></Image>
      </div>
      </div>

      <div className="sm:grid maxWidthForSections  w-full grid-cols-2  md:grid-cols-3 mt-4 flex flex-col items-center gap-x-2 gap-y-8">
        {/* -----------------Logo And Socials------------- */}
        <div>
          <div className="flex sm:justify-start justify-center">
            <Image
              src={ConvoIcon}
              alt="convo logo"
              className="object-cover  w-52   "
            />
          </div>
          <p className="text-white/80 mt-6 sm:text-left md:text-base text-sm text-center">
            Department of Electrical Engineering <br />
            Jadavpur University <br />
            188, Raja Subodh Chandra Mallick Rd, Jadavpur, <br />
            Kolkata, West Bengal 700032 <br />
            India
          </p>
          <ul className="flex gap-x-4 mt-6 sm:justify-start justify-center">
            <li>
              <a
                href="https://www.instagram.com/convolution25?igsh=MXVoaGNibG5qeTQzdw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="iconBoxes">
                  <FaInstagram className="iconsFooter" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/15Mh8tfiC7/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="iconBoxes">
                  <FaFacebookF className="iconsFooter" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/convolution-juee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="iconBoxes">
                  <FaLinkedinIn className="iconsFooter" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* ----------Get in touch------------- */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl   text-white">Get In Touch</h2>
          <span className="h-1 w-14 mt-2 rounded-full bg-white"></span>
          <ul className="mt-6 flex flex-col gap-y-4 [&>*]:listFooter">
            <li>
              <div className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdOutlineEmail className="iconsFooter" />
                </div>
              </div>
              <div className="">
                <h1 className="listHead">Email</h1>
                <p className="listPara">convolutionx2025@gmail.com</p>
              </div>
            </li>
            <li>
              <a target="_blank" href="https://maps.app.goo.gl/wKYjjoLyR1ScsFEq5" className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdLocationOn className="iconsFooter" />
                </div>
              </a>
              <div className="">
                <h1 className="listHead">Location</h1>
                <p className="listPara">
                  Department of Electrical Engineering, <br />
                  Jadavpur University
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdCall className="iconsFooter" />
                </div>
              </div>
              <div className="">
                <h1 className="listHead">Phone</h1>
                <p className="listPara">+91 8945909374</p>
                <p className="listPara">+91 8101369261</p>
              </div>
            </li>
          </ul>
        </div>
        {/* ----------------Event Link--------------- */}
        <div className="flex flex-col items-center sm:items-start md:items-center">
          <h2 className="text-3xl  text-white">Events</h2>
          <span className="h-1 w-14 mt-2 rounded-full bg-white"></span>
          <ul className="mt-6 [&>*]:eventLinks">
          {events.map((event, index) => (
              <li key={index} className="hover:scale-105 text-lg sm:text-left text-center">
                <Link href={event.href}>{event.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-1 mt-10 w-[80vw] mx-auto rounded-sm bg-white/80"></div>
      <p className="font-sans text-white text-sm mt-1  text-center">Made with ❤️ by Team Convo</p>
    </div>
  );
};

export default Footer;
