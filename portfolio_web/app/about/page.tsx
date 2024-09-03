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
          className=" w-full flex flex-row items-center mx-auto justify-between max-w-[1123px] max-[1200px]:flex-col"
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
          <section
            id="intro_text"
            className="max-w-[780px] .app_blk_accent max-[1200px]:mt-8 "
          >
            <p className="mt-8">
              My name is Dave, and this is where I share{" "}
              <strong className="font-semibold">my work and thoughts</strong>.
              I&#39;m an aspiring{" "}
              <strong className="font-semibold">product engineer </strong>
              with a focus on{" "}
              <strong className="font-semibold">
                User Experience (UX) and software engineering (SWE)
              </strong>
              , based in Providence, RI, and Seoul, South Korea. I thrive at the
              crossroads of{" "}
              <strong className="font-semibold">design and engineering</strong>,
              with a passion for creating meaningful solutions to both practical
              problems and philosophical questions.{" "}
            </p>
            <br />
            <p>
              Currently, I&#39;m a senior studying{" "}
              <strong className="font-semibold">Computer Science</strong> and{" "}
              <strong className="font-semibold">Business Economics</strong> at
              Brown University. Outside the classroom, I&#39;m working on{" "}
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
              , a startup aimed at reducing the carbon footprint within college
              communities. When I&#39;m not working on{" "}
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
              , I am at{" "}
              <strong
                className={`font-semibold link_gray ${
                  hoveredIndex === "5" ? "gradient-text" : ""
                }`}
                onMouseEnter={() => setHoveredIndex("5")}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href="https://www.brown.edu/"
                  className={`link_underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MedDB Lab at Brown
                </a>
                <sup className="text-sm">5</sup>
              </strong>
              , where I&#39;m involved in developing an LLM Agent-based
              redaction system for medical datasets. My past experiences include
              roles at{" "}
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
              ,
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
              </strong>
              ,
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
              . My recent interests revolve around human-computer interaction,
              robotics, and architecture. In my free time, I enjoy snowboarding,
              painting, CrossFit, and savoring a good cup of coffee.
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
              <li
                className={`max-w-fit ${
                  hoveredIndex === "5" ? "gradient-text" : ""
                }`}
              >
                5. Research Assistant
              </li>
            </ol>
          </section>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20 mt-20 mb-[136px]"
      >
        <h3 className="app_gray font-medium mb-7">EDUCATION</h3>
        <div
          id="education_content"
          className="w-full flex flex-row min-[1200px]:items-center min-[1200px]:mx-auto justify-between min-[1200px]:max-w-[1123px] min-[1200px]:gap-y-32 max-[1200px]:flex-col "
        >
          <section
            id="brown_uni_info"
            className="max-w-[645px] max-[1200px]: mb-14"
          >
            <p className="text-base mb-1">Brown University</p>
            {/* degree information */}
            <div className="flex flex-col sm:flex-row max-sm:mb-4 sm:gap-3 font-medium text-xl italic">
              <p>Sc.B. Computer Science</p>
              <p>A.B. Business Economics</p>
            </div>
            <p>2019 - 2025</p>

            <h4 className="font-medium text-xl mt-2">Relevant Courses</h4>
            <h5 className="font-medium app_gray mt-4 mb-1">Computer Science</h5>
            <p>
              Data Science Fellows, Computer Vision, Artificial Intelligence,
              Machine Learning, UI/UX, Computer Systems, Intro to Software
              Engineering, Data Structures & Algorithms
            </p>
            <h5 className="font-medium app_gray mt-4 mb-1">
              Business-Economics
            </h5>
            <p>
              Game Theory, Investments, Applied Research Methods,
              Microeconomics, Macroeconomics, Financial Accounting, Principles
              of Economics, Statistical Inference
            </p>
          </section>
          <section
            id="additional_edu_info"
            className="flex flex-col flex-grow min-[1200px]:max-w-[348px] min-[1200px]:min-h-[300px] justify-between"
          >
            <div className="max-[1200px]: mb-14">
              <p className="text-base mb-1">Republic of Korea Air Force</p>
              {/* More information */}
              <div className="flex flex-row gap-3 font-medium text-xl italic">
                <p>Honor Guard Staff Sergeant</p>
              </div>
              <p>2020 - 2022</p>
            </div>
            <div className="">
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
          className={`text-[30px]  ${playfair.className} italic font-medium app_blk_accent mx-auto  md:my-[136px]`}
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
          className={`text-[64px] max-md:text-[30px]  ${playfair.className} italic font-medium app_blk_accent mx-auto  md:mt-[136px]`}
        >
          Let's Connect!
        </h2>
        <p className="max-w-[670px] text-center mx-auto my-[28px]">
          If you are interested in any of my work or hobbies, please don&apos;t
          hesitate to reach out! I love making new friends and catching up with
          my old friends.{" "}
        </p>
        <div className="flex flex-col md:flex-row mt-2 mx-auto gap-4">
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
