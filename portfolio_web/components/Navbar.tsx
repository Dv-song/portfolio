"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import homelogo from "../public/navbar/DAVE SONG.svg";
import linkedin from "../public/socials/linkedin.svg";
import email from "../public/socials/mail.svg";
import menu from "../public/menu.svg";

import { NAV_LINKS } from "@/constants";

const email_user = "seung_heon_song";
const email_domain = "brown.edu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center z-30 py-[10px] px-4  md:px-20 bg-white opacity-80 mx-auto max-w-[1700px]">
        {/* home logo */}
        <Link href="/">
          <Image src={homelogo} alt="davesong portfolio logo" className="" />
        </Link>

        {/* navbar links for larger screens */}
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

        {/* social links for larger screens */}
        <ul id="navbar_socials" className="hidden h-full gap-8 lg:flex">
          <Link href="https://www.linkedin.com/in/davidshsong/" target="_blank">
            <Image src={linkedin} alt="social linkedin icon" />
          </Link>
          <a
            href={`mailto:${email_user}@${email_domain}?subject=[From%20Portfolio]%20Hey%20Dave!&body=Dear%20Dave%2C%20%0D%0AHi!`}
            title="send me an email"
          >
            <Image src={email} alt="email icon" />
          </a>
        </ul>

        {/* menu icon for smaller screens */}
        <button
          type="button"
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <Image src={menu} alt="menu icon" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-40">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Image
                      src={homelogo}
                      alt="davesong portfolio logo"
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      href={link.href}
                      key={link.key}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 "
                      onClick={() => setOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900 mx-auto">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/davidshsong/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="social linkedin icon" />
                </Link>
                <a
                  href={`mailto:${email_user}@${email_domain}?subject=[From%20Portfolio]%20Hey%20Dave!&body=Dear%20Dave%2C%20%0D%0AHi!`}
                  title="send me an email"
                >
                  <Image src={email} alt="email icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
