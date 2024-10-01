"use client"

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="p-6 md:p-0 lg:pt-10 ">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <svg
            className="md:ml-6 xl:ml-16 cursor-pointer"
            width="48"
            height="48"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>

        <svg
          onClick={toggleMenu}
          className="md:hidden cursor-pointer"
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>

        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}

        <div className="hidden xl:block mx-16 h-[0.125rem] flex-1 w-[31.25rem] bg-[#979797] "></div>
        <div className="md:bg-[#191B26] lg:bg-[rgba(255, 255, 255, 0.05)] lg:backdrop-blur-2xl lg:bg-transparent hidden md:block md:py-9 md:pr-10 md:pl-20 xl:pl-40 ">
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
