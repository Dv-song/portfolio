"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import bg from "../public/homebg.png";
import { LIFE_UPDATES } from "@/constants";
import HeroSubCard from "./HeroSubCard";
import arrowdown from "@/public/landing/arow_down.svg";

import GradientBackground from "./GradientBackground";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
    null
  );

  return (
    <>
      <div className="bg-black h-[546px] mt-[84px] relative text-white flex flex-col text-center items-center justify-center lg:rounded-lg w-full overflow-hidden">
        <GradientBackground />
        <div className="relative z-10 lg:px-0 px-8">
          <p>Hey! I'm</p>
          <h2 className="font-bold text-4xl mb-7">Dave Song</h2>
          <p className="max-w-[556px] mb-7">
            a <b>product engineer (UX + SWE)</b> based in Providence, RI. I'm
            currently studying{" "}
            <b>Computer Science and Business Economics at Brown University</b>.
            I am driven by my love for{" "}
            <span className="italic">
              malleable software, software development, and a human-centered
              design approach.
            </span>
          </p>
          <p>
            Thank you for visiting my website. I hope you have a great time.
          </p>
        </div>
      </div>
      {/* Section Below: Subcards for life updates */}
      <div className="flex md:flex-row flex-wrap w-full justify-around lg:justify-between item">
        {LIFE_UPDATES.map((update) => (
          <HeroSubCard title={update.title} content={update.update} />
        ))}
      </div>
      <div className="h-40px mt-5 mx-auto font-medium dark_gray_text flex flex-col items-center">
        SELECTED WORKS
        <Image src={arrowdown} alt="navigation image" />
      </div>
    </>
  );
};

export default Hero;
