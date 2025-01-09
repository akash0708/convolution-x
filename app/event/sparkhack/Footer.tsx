import Image from "next/image";
import React from "react";
// import whiteStar from '@/assets/images/Footer/stars white.png'
import flakebg from "@/assets/images/SparkHack/flakeBg.png";
import flakebgMobile from "@/assets/images/SparkHack/flakeBgMobile.png";
import ConvoIcon from "@/assets/images/HeroSectionImages/ConvoSvg.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import EventFooter from "@/components/EventFooter";

const Footer = () => {
  return (
    <div id="contact" className="py-16 overflow-hidden relative ">
      <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40   top-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-full object-cover absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      />
      
      <div className="absolute  top-0 left-0 w-full h-full  bg-gradient-to-b from-[#8FE3F0] via-[#3AADD9] to-[#2CB1DF] -z-20 ">
       
      </div>

      {/* <div className="sm:grid maxWidthForSections  w-full grid-cols-2  md:grid-cols-3 mt-4 flex flex-col items-center gap-x-2 gap-y-8 text-shadow">
        <div>
          <div className="flex sm:justify-start justify-center">
            <Image
              src={ConvoIcon}
              alt="convo logo"
              className="object-cover  w-52   "
            />
          </div>
          <p className="text-white text-shadow-dark mt-6 sm:text-left md:text-base text-sm text-center">
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
        <div className="flex flex-col items-center">
          <h2 className="text-3xl  font-me text-white text-shadow-dark">Get In Touch</h2>

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
                <p className="listPara" text-white >convolutionx2025@gmail.com</p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-normal">
                <div className="iconBoxes">
                  <MdLocationOn className="iconsFooter" />
                </div>
              </div>
              <div className="">
                <h1 className="listHead">Location</h1>
                <p className="listPara ">
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
                <p className="listPara " >+91 123456789</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start md:items-center">
          <h2 className="text-3xl font-medium text-white text-shadow-dark">Events</h2>
          <span className="h-1 w-14 mt-2 rounded-full bg-white"></span>
          <ul className="mt-6 [&>*]:eventLinks text-shadow-dark">
          <li>
    <Link href="/event/decisia">Decisia</Link>
  </li>
  <li>
    <Link href="/event/sparkhack">Sparkhack</Link>
  </li>
  <li>
    <Link href="/event/algomaniac">Algomaniac</Link>
  </li>
  <li>
    <Link href="/event/aboltabol">Abol Tabol</Link>
  </li>
  <li>
    <Link href="/event/circuistics">Circuistics</Link>
  </li>
  <li>
    <Link href="/event/inquizitive">Inquizzitive</Link>
  </li>
  <li>
    <Link href="/event/eureka">Eureka</Link>
  </li>
  <li>
    <Link href="/event/jutalks">JU Talks</Link>
  </li>
          </ul>
        </div>
      </div>
      <div className="h-1 mt-10 w-[80vw] mx-auto rounded-sm bg-white/80"></div> */}

      <EventFooter linkText="hover:scale-105 text-white text-shadow-dark" headerText="text-white text-shadow-dark" svgColor="white" listText="text-white text-shadow-dark " iconColor="darkBlue"></EventFooter>
    </div>
  );
};

export default Footer;
