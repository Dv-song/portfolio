"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import bg from "../public/homebg.png";
import { LIFE_UPDATES } from "@/constants";
import HeroSubCard from "./HeroSubCard";

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
    <section className="relative flex flex-col flex-grow max-container padding-container py-2 px-20">
      <div className="bg-black h-[546px] mt-[84px] relative text-white flex flex-col text-center items-center justify-center rounded-lg w-full overflow-hidden">
        <GradientBackground />
        <div className="relative z-10">
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
      <div className="flex flex-row w-full justify-between">
        {LIFE_UPDATES.map((update) => (
          <HeroSubCard title={update.title} content={update.update} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
