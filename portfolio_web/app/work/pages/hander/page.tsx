import React from "react";
import Image from "next/image";
import banner from "/public/handerbanner.svg";
import prob from "/public/problem.svg";
import stats from "/public/stats.svg";
import comp from "/public/competitive analysis.svg";
import assump from "/public/handerassumption.svg";
import research from "/public/research.svg";
import probid from "/public/problemidentification.svg";
import features from "/public/handerfeatures.svg";
import mobile from "/public/mobilesection.svg";
import plans from "/public/plans.svg";
import workflow from "/public/workflow.svg";

const page = () => {
  return (
    <>
      <section
        className="relative flex flex-col flex-grow max-container padding-container"
        id="Hander_banner"
      >
        <a href="/work#work">
          <button className="absolute mt-16 left-20 p-4 flex items-center gap-2 z-10 hover:bg-[#f3f3f3] px-4 py-1 rounded-[500px]">
            <span>←</span> BACK{" "}
          </button>
        </a>
        <Image src={banner} alt="home background image" />
      </section>

      <section
        id="Hander_Info"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20 max-w-[894px] mx-auto"
      >
        <h3 className="text-[48px] font-semibold">Hander</h3>
        <h4 className="text-lg link_gray font-medium -mt-2">
          With a mission to decrease the carbon footprint of college students
        </h4>
        <p className="">Timeline: March 2023 - Present</p>
        <p className="my-8">
          Hander is an online platform that enables college students nationwide
          to buy and sell used items and gadgets securely within the vicinity of
          their institutions. Since the spring of 2023, I have led the research
          and development cycles for the platform. As of spring 2024, we are
          developing Android and iOS apps to better target students.
        </p>

        <hr />

        <div className="flex flex-row justify-between">
          {/* Role Section */}
          <div className="mt-8 max-w-[362px]">
            <h5 className="text-xl font-semibold mb-3">Role</h5>
            <p>
              One of the co-founders of the startup company. As the CEO and
              Product Manager, I am in charge of managing UI/UX design, user
              research, and the development cycle.
            </p>
          </div>

          {/* Core Team Section */}
          <div className="mt-8">
            <h5 className="text-xl font-semibold mb-3 max-w-[157px]">
              Core Team
            </h5>
            <ul className="list-none">
              <li className="flex flex-col">
                {" "}
                <p>Dave Song</p>{" "}
                <p className="app_gray text-sm"> CEO | Product Manager</p>
              </li>
              <li className="flex flex-col">
                {" "}
                <p>Eric Kim</p>{" "}
                <p className="app_gray text-sm"> CXO | Designer</p>
              </li>
              <li className="flex flex-col">
                {" "}
                <p>Caden Chou</p>{" "}
                <p className="app_gray text-sm"> COO | Developer</p>
              </li>
              <li className="flex flex-col">
                {" "}
                <p>Nuo Wen Lei</p>{" "}
                <p className="app_gray text-sm"> CTO | Developer</p>
              </li>
            </ul>
          </div>

          {/* Top Skills Section */}
          <div className="mt-8">
            <h5 className="text-xl font-semibold mb-3">Top Skills</h5>
            <ul className="list-none">
              <li>UX Research</li>
              <li>Wire-framing</li>
              <li>Prototyping</li>
              <li>User Testing</li>
              <li>Full-stack development</li>
              <li>Product Management</li>
            </ul>
          </div>
        </div>
        <Image src={prob} alt="problem statement" className="mt-24" />
        <Image src={stats} alt="problem statement" className="mt-10" />

        <h3 className="hander_gradient mt-20">Competitive Analysis</h3>
        <hr />
        <Image src={comp} alt="competitive analysis" className="mt-10" />
      </section>
      <Image src={assump} alt="assumption" className="mt-20" />
      <section
        id="research"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20 max-w-[894px] mx-auto"
      >
        <h3 className="hander_gradient mt-20">Quantitative Research</h3>
        <hr />
        <Image src={research} alt="quantitative research results" />

        <h3 className="hander_gradient mt-20">Problem Identification</h3>
        <hr />
        <Image
          src={probid}
          alt="problems and identification"
          className="mt-10"
        />
      </section>
      <section className="bg-gradient-to-r from-[#00B6B0] to-[#8C68D2] min-h-[174px] text-center flex flex-col justify-center mt-10">
        <h1 className="text-white/[0.85] font-medium text-[32px]">
          HANDER ENABLES
        </h1>
      </section>
      <section
        id="features"
        className="flex flex-col flex-grow max-container padding-container py-2 px-20 max-w-[1124px] mx-auto mt-11"
      >
        <Image
          src={features}
          alt="hander platform features section"
          className=""
        />
      </section>
      <Image src={mobile} alt="mobile section" className="mt-24" />

      <section
        id="plans"
        className="flex flex-col flex-grow max-container padding-container py-2 px-20 max-w-[1124px] mx-auto mt-11"
      >
        <Image
          src={plans}
          alt="hander platform features section"
          className=""
        />
        <h3 className="hander_gradient mt-20">Growth & Reflection</h3>
        <p className="link_gray text-lg font-medium">
          What I Learned Through Growing & Building Hander
        </p>
        <hr />
        <p className="mt-8">
          Hander was started not for revenue generation but to pursue what we
          believed was the most meaningful and impactful for college
          communities. Since most of the MVP development and user interviews
          were conducted during the semester, it was essential to adhere to
          agile methodology. In fact, the most important lesson was the
          experience of leading a real-world project with design and engineering
          teams. It was crucial to organize and prioritize work and utilize
          rapid prototyping with wireframes to explore ideas while conserving
          the resources and time of the engineering team. We are planning to
          implement some of the exciting features for the platform this summer
          and can't wait to grow with the company. The workflow chart below
          provides a high-level overview of the flow chart I have developed for
          our teams to increase efficiency during the semester.
        </p>
      </section>
      <Image
        src={workflow}
        alt="problems and identification"
        className="mt-10 mx-auto"
      />
      <div className=" flex flex-col min-h-[500px] items-center justify-center">
        <h1 className="text-[80px] font-medium hander_accent">Hander</h1>
      </div>
    </>
  );
};

export default page;
