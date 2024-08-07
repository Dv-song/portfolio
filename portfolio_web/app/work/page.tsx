"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { ENGNSKILLS } from "@/constants";
import { DESIGNSKILLS, WORKTYPES, WORKLIST } from "@/constants";
import { useState } from "react";
import WorkCard from "@/components/WorkCard";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredWorkList =
    selectedCategory === "All"
      ? WORKLIST
      : WORKLIST.filter((work) => work.category.includes(selectedCategory));

  return (
    <>
      {/* Design Approach Section */}
      <section
        id="design_approach"
        className=" dflex flex-col flex-grow max-container padding-container py-2 px-20  mt-20"
      >
        <h3 className="app_gray font-medium mb-7">BIO</h3>
        {/* approach content */}
        <div className="flex flex-col min-[1200px]:flex-row min-[1200px]:justify-center min-[1200px]:items-center">
          {/* Design for People, Engineer for Impact slogan */}
          <div
            className={`max-w-[500px] md:font-[30px] max-[1200px]:mb-11 min-[1200px]:min-h-[378px] grow flex flex-col justify-between app_blk_accent min-[1200px]:pl-[140px] ${playfair.className} text-6xl font-medium z-10`}
          >
            <h1 className="mb-2 max-md:text-[30px]">Design for</h1>
            <h1 className="lg:pl-[130px] mb-2 max-md:text-[30px]">
              <span className="italic lg:pl-8 max-md:text-[30px]"> people</span>
              ,
            </h1>
            <h1 className="mb-2 max-md:text-[30px]">Engineer for</h1>
            <h1 className="lg:pl-[130px] max-md:text-[30px]">
              <span className="italic">impact</span>.
            </h1>
          </div>

          {/* Design Approach Exp */}
          <div className=" max-w-[634px] min-[1200px]:ml-20 min-[1200px]:max-h-[326px] flex flex-col justify-between">
            <p>
              As a product engineer with a background in architecture and design
              skills, I excel as <strong>a visual problem solver</strong> and
              firmly believe in <strong>engineering with narratives</strong>. I
              explore ideas using <strong>Design Thinking Process</strong>,
              validate design and implementation details through{" "}
              <strong>Computational Thinking</strong>, and develop solutions
              based on <strong>Agile Methodology</strong>. My expertise in UX
              research and software development is primarily focused on creating
              software solutions. <sup>***</sup>
            </p>
            {/* links for subsection of the page */}
            <div className="my-[28px]">
              <a
                href="#skills"
                className="blue_accent underline underline-offset-2 mt-[6px] pl-4 italic"
              >
                View Skills
              </a>{" "}
              <br />
              <a
                href="#work"
                className="blue_accent underline underline-offset-2 mt-[6px] pl-4 italic"
              >
                View Work
              </a>
            </div>
            <p className="app_gray text-sm">
              <sup>***</sup> I am also aware of modern socieotechnical problems
              requiring solutions beyond digital solutions. Please reach out to
              collaborate & talk about the problems you would like to solve!
            </p>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="flex flex-col flex-grow py-2 px-20  mt-20 mb-[136px] "
      >
        <h3 className="app_gray font-medium mb-7 ">SKILLS</h3>
        <div className="flex flex-col min-[700px]:flex-row mx-auto ">
          <div id="skill_list" className="flex min-[700px]:flex-row flex-col">
            <div id="engineering" className=" max-w-[500px] mr-11">
              <h3 className="text-xl font-bold mb-4">Engineering</h3>
              {ENGNSKILLS.map((skill) => (
                <>
                  <p className="app_gray font-medium mb-2">{skill.type}</p>
                  <p className="mb-4">{skill.skills}</p>
                </>
              ))}
            </div>
            <div id="design" className=" max-w-[500px]">
              <h4 className="text-xl font-bold mb-4">Design & UX Research</h4>
              {DESIGNSKILLS.map((skill) => (
                <>
                  <p className="app_gray font-medium mb-2">{skill.type}</p>
                  <p className="mb-4">{skill.skills}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section
        id="work"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20 mb-[136px]"
      >
        <h3 className="app_gray font-medium mb-7">WORK</h3>
        {/* filter bar */}
        <div className="flex flex-row justify-center mb-11">
          <div className="flex flex-col sm:flex-row mb-5 max-w-[1124px] w-full justify-between">
            {WORKTYPES.map((category) => (
              <button
                key={category}
                id="workfilter"
                className={`px-4 py-1 rounded-[500px] font-normal ${
                  selectedCategory === category
                    ? "app_blk_accent bg-[#ebebeb]"
                    : "app_gray"
                } hover:blue_accent`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* work list section */}
        <div className="flex flex-row justify-center mb-11">
          <div className="flex flex-row w-fit md:justify-between mx-auto">
            <div className="grid min-[870px]:grid-cols-2  min-[1300px]:grid-cols-3 gap-11">
              {filteredWorkList.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
