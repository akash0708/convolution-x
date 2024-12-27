import React from "react";
import ConvoIcon from "@/assets/images/HeroSectionImages/ConvoSvg.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="top-0 fixed left-0 right-0 bg-black/10 backdrop-filter  backdrop-blur-md text-white py-4 z-[999]">
      <div className="mx-auto xl:max-w-[1280px] w-full flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <Image
            src={ConvoIcon}
            alt="convo logo"
            className="object-cover h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-x-6 text-lg">
          <li className='nav-item' >
            <Link href="#home" scroll={false}>
              Home
            </Link>
          </li>
          <li className='nav-item' >
            <Link href="#about" scroll={false}>
              About
            </Link>
          </li>
          <li className='nav-item' >
            <Link href="#events" scroll={false}>
              Events
            </Link>
          </li>
          <li className='nav-item' >
            <Link href="#timeline" scroll={false}>
              Timeline
            </Link>
          </li>
          <li className='nav-item' >
            <Link href="#team" scroll={false}>
              Team
            </Link>
          </li>
          <li className='nav-item' >
            <Link href="#faq" scroll={false}>
              FAQ
            </Link>
          </li>
          <li className='nav-item' >
            <Link href="#contact" scroll={false}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
