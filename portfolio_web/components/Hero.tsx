"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import bg from "../public/homebg.png";

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
    <section className="relative flex flex-grow max-container padding-container py-2 px-20 max-h-[800px]">
      <div
        className={`grow flex flex-col justify-between blue_accent md:pl-[140px] ${playfair.className} text-[80px] font-medium z-10 lg:min-w-[800px]`}
      >
        <h1 className="mb-2">Design</h1>
        <h1 className="pl-[130px] mb-2">
          for <span className="italic"> people</span>.
        </h1>
        <h1 className="mb-2">Engineer</h1>
        <h1 className="pl-[130px]">
          for <span className="italic">impact</span>.
        </h1>
      </div>
      <Image
        src={bg}
        alt="home background image"
        className="absolute inset-0 z-0 max-h-[710px] mt-16 ml-[-744px] "
      />

      <div id="bio" className="flex flex-col justify-center leading-relaxed">
        <h4 className="font-medium text-xl">Hey! I'm</h4>
        <h2 className="italic font-bold text-5xl mb-3">Dave Song</h2>
        <p>
          a{" "}
          <strong className="font-semibold">
            product engineer (UX + SWE){" "}
          </strong>
          based in Providence, RI and Seoul, South Korea. I thrive at the{" "}
          <strong className="font-semibold">
            intersection of design and engineering
          </strong>
          . Currently at{" "}
          <strong
            className={`font-semibold link_gray ${
              hoveredIndex === 1 ? "gradient-text" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href="https://www.brown.edu/" className="link_underline">
              Brown University
            </a>
            <sup className="text-sm">1</sup>
          </strong>{" "}
          and{" "}
          <strong
            className={`font-semibold link_gray ${
              hoveredIndex === 2 ? "gradient-text" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href="https://www.hander.us/" className={`link_underline`}>
              Hander
            </a>
            <sup className="text-sm">2</sup>
          </strong>{" "}
          focusing on building & growing. Previously, at{" "}
          <strong
            className={`font-semibold link_gray ${
              hoveredIndex === "3" ? "gradient-text" : ""
            }`}
            onMouseEnter={() => setHoveredIndex("3")}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href="https://www.reso.io/" className={`link_underline`}>
              Reso
            </a>
            <sup className="text-sm">3</sup>
          </strong>
          ,{" "}
          <strong
            className={`font-semibold link_gray ${
              hoveredIndex === "3,4" ? "gradient-text" : ""
            }`}
            onMouseEnter={() => setHoveredIndex("3,4")}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href="https://www.quantguide.io/" className={`link_underline`}>
              QuantGuide
            </a>
            <sup className="text-sm">3,4</sup>
          </strong>
          ,and{" "}
          <strong
            className={`font-semibold link_gray ${
              hoveredIndex === 5 ? "gradient-text" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href="https://www.brownentrepreneurship.com/"
              className={`link_underline`}
            >
              Brown EP Tech
            </a>
            <sup className="text-sm">5</sup>
          </strong>
          .
        </p>

        <ol
          id="link_list"
          className="flex flex-wrap link_gray font-medium gap-x-5 mt-8"
        >
          <li
            className={`max-w-fit ${
              hoveredIndex === 1 ? "gradient-text " : ""
            }`}
          >
            1. Sc.B. Computer Science, A.B. Business-Economics
          </li>
          <li
            className={`max-w-fit ${hoveredIndex === 2 ? "gradient-text" : ""}`}
          >
            2. Co-Founder
          </li>
          <li
            className={`max-w-fit ${
              hoveredIndex === "3" || hoveredIndex === "3,4"
                ? "gradient-text"
                : ""
            }`}
          >
            3. UX Researcher
          </li>
          <li
            className={`max-w-fit ${
              hoveredIndex === "3,4" ? "gradient-text" : ""
            }`}
          >
            4. SWE
          </li>
          <li
            className={`max-w-fit ${hoveredIndex === 5 ? "gradient-text" : ""}`}
          >
            5. Director, Head of Tech Consultant
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Hero;
