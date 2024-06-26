import Link from "next/link";
import Image from "next/image";
import React from "react";

import homelogo from "../public/logo.svg";
import linkedin from "../public/socials/linkedin.svg";
import email from "../public/socials/mail.svg";
import menu from "../public/menu.svg";

import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-[10px] px-20 bg-white opacity-90">
      {/* home logo */}
      <Link href="/">
        <Image src={homelogo} alt="davesong portfolio logo" className="" />
      </Link>

      {/* navbar links */}
      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="app_gray font-medium hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* navbar links */}
      <ul id="navbar_socials" className="hidden h-full gap-8 lg:flex">
        <Link href="https://www.linkedin.com/in/davidshsong/">
          <Image src={linkedin} alt="social linkedin icon" />
        </Link>
        <a
          href="mailto:seung_heon_song@brown.edu?subject=[From%20Portfolio]%20Hey%20Dave!&body=Dear%20Dave%2C%20%0D%0AHi!"
          title="send me an email"
        >
          <Image src={email} alt="email icon" />
        </a>
      </ul>

      {/* case for smaller device size, menu icon instead */}
      <Image
        src={menu}
        alt="menu icon"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
