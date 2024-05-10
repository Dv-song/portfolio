"use client";
import Image from "next/image";
import profileImg from "../../public/profileImg.png";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import Button from "@/components/Button";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
    null
  );
  return (
    <>
      {/* Introduction Section */}
      <section
        id="bio"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20  mt-20 mb-[136px]"
      >
        <h3 className="app_gray font-medium mb-7">BIO</h3>
        <div
          id="introduction"
          className=" w-full flex flex-row items-center mx-auto justify-between max-w-[1123px]"
        >
          <section id="img_section" className="flex flex-col items-center">
            <Image
              src={profileImg}
              alt="Dave's Profile Picture"
              className="max-w-[254px]"
            />
            <h2
              className={`text-6xl  ${playfair.className} italic font-semibold mt-4 app_blk_accent`}
            >
              Hey!
            </h2>
          </section>
          <section id="intro_text" className="max-w-[780px] .app_blk_accent">
            <p className="">
              My name is Dave, and this is where{" "}
              <strong className="font-semibold">
                I share my work & writings{" "}
              </strong>
              . I am a{" "}
              <strong className="font-semibold">
                product engineer (UX + SWE){" "}
              </strong>
              based in Providence, RI and Seoul, South Korea. I thrive at the{" "}
              <strong className="font-semibold">
                intersection of design and engineering
              </strong>
              . I'm driven by my passion for{" "}
              <strong className="font-semibold">
                human-centered design and software development
              </strong>
              . At Brown University, I study{" "}
              <strong className="font-semibold">Computer Science</strong> and{" "}
              <strong className="font-semibold">Business Economics</strong>.
            </p>
            <br />
            <p>
              Currently, I'm at{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === 1 ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.hander.us/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hander
                </a>
                <sup className="text-sm">1</sup>
              </strong>{" "}
              focusing on building & growing. When I'm not working on{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === 1 ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.hander.us/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hander
                </a>
                <sup className="text-sm">1</sup>
              </strong>
              , I'm at{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === "2" ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex("2")}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.reso.io/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reso
                </a>
                <sup className="text-sm">2</sup>
              </strong>{" "}
              or{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === "3" ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex("3")}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.dymaxion.design/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dymaxion
                </a>
                <sup className="text-sm">3</sup>
              </strong>
              . Previously at{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === "2,3" ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex("2,3")}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.quantguide.io/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QuantGuide
                </a>
                <sup className="text-sm">2,3</sup>
              </strong>
              , and{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === 4 ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(4)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.brownentrepreneurship.com/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brown EP Tech
                </a>
                <sup className="text-sm">4</sup>
              </strong>
              . Lately, I've been interested in HCI research, Hard Tech, and
              architecture.On the side, I snowboard, paint, design architecture
              models, lift things (resistance training & crossfit), and enjoy
              coffee.
            </p>

            <ol
              id="link_list"
              className="flex flex-wrap link_gray font-medium gap-x-5 mt-8 text-[14px]"
            >
              <li
                className={`max-w-fit ${
                  hoveredIndex === 1 ? "gradient-text " : ""
                }`}
              >
                1. Co-Founder
              </li>
              <li
                className={`max-w-fit ${
                  hoveredIndex === "2,3" || hoveredIndex === "2"
                    ? "gradient-text"
                    : ""
                }`}
              >
                2. UX Researcher
              </li>
              <li
                className={`max-w-fit ${
                  hoveredIndex === "3" || hoveredIndex === "2,3"
                    ? "gradient-text"
                    : ""
                }`}
              >
                3. SWE
              </li>
              <li
                className={`max-w-fit ${
                  hoveredIndex === 4 ? "gradient-text" : ""
                }`}
              >
                4. Director, Head of Tech Consultant
              </li>
            </ol>
          </section>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20  mt-20 mb-[136px]"
      >
        <h3 className="app_gray font-medium mb-7">EDUCATION</h3>
        <div
          id="education_content"
          className=" w-full flex flex-row items-center mx-auto justify-between max-w-[1123px]  gap-y-32"
        >
          <section id="brown_uni_info" className=" max-w-[645px]">
            <p className="text-base mb-1">Brown University</p>
            {/* degree information */}
            <div className="flex flex-row gap-3 font-medium text-xl italic">
              <p>Sc.B. Computer Science</p>
              <p>A.B. Business Economics</p>
            </div>
            <p>2019 - 2025</p>

            <h4 className="font-medium text-xl mt-2">Relevant Courses</h4>
            <h5 className="font-medium app_gray mt-4 mb-1">Computer Science</h5>
            <p>
              Computer Vision, Artificial Intelligence, Machine Learning, UI/UX,
              Computer Systems, Intro to Software Engineering, Data Structures &
              Algorithms
            </p>
            <h5 className="font-medium app_gray mt-4 mb-1">
              Business-Economics
            </h5>
            <p>
              Investments, Applied Research Methods, Microeconomics,
              Macroeconomics, Financial Accounting, Principles of Economics,
              Statistical Inference
            </p>
          </section>
          <section
            id="additional_edu_info"
            className="flex flex-col flex-grow max-w-[348px] min-h-[300px] justify-between"
          >
            <div>
              <p className="text-base mb-1">Republic of Korea Air Force</p>
              {/* More information */}
              <div className="flex flex-row gap-3 font-medium text-xl italic">
                <p>Honor Guard Staff Sergeant </p>
              </div>
              <p>2020 - 2022</p>
            </div>
            <div>
              <p className="text-base mb-1">Rhode Island School of Design</p>
              {/* More information */}
              <div className="flex flex-col font-medium text-xl italic">
                <p>Industrial Design: Design Science</p>
                <p>Architecture: Intro Studio</p>
              </div>
              <p>2020, 2023</p>
            </div>
          </section>
        </div>
      </section>

      {/* TLDRs & OPINIONS */}
      <section
        id="TLDRs & OPINIONS"
        className=" relative flex flex-col flex-grow max-container padding-container py-2 px-20  mt-20 mb-[136px]"
      >
        <h3 className="app_gray font-medium mb-7">TLDRS & OPINIONS</h3>

        <h2
          className={`text-[30px]  ${playfair.className} italic font-medium app_blk_accent mx-auto  my-[136px]`}
        >
          Coming Soon!
        </h2>
      </section>

      {/* Connect! Section */}
      <section
        id="Connect"
        className=" relative flex flex-col flex-grow max-container padding-container py-2 px-20  mt-8 mb-[136px]"
      >
        <h3 className="app_gray font-medium mb-7 ">SAY HI</h3>

        <h2
          className={`text-[64px]  ${playfair.className} italic font-medium app_blk_accent mx-auto  mt-[136px]`}
        >
          Let's Connect!
        </h2>
        <p className="max-w-[670px] text-center mx-auto my-[28px]">
          If you are interested in any of my work or hobbies, please don&apos;t
          hesitate to reach out! I love making new friends and catching up with
          my old friends.{" "}
        </p>
        <div className="flex flex-row mt-2 mx-auto gap-4">
          <a
            href="mailto:seung_heon_song@brown.edu?subject=[From%20Portfolio]%20Hey%20Dave!&body=*%20please%20share%20what%20you%20want%20to%20talk%20about!"
            title="send me an email"
          >
            <Button text="☕ Coffee Chat" color="#BBBBBB" />
          </a>
          <a href="/contact">
            <Button text="👋 Connect" color="#2453FF" />
          </a>
        </div>
      </section>
    </>
  );
}
