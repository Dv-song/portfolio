import React from "react";
import banner from "../../../../public/ysofaBanner.png";
import Image from "next/image";
import yalesoabefore from "../../../../public/yalesoa.png";
import yaleissue from "../../../../public/yalesoaissue.png";
import speedsketch from "../../../../public/speedsketch.png";
import infobefore from "../../../../public/infoarchbefore.png";
import infoafter from "../../../../public/infoarchafter.png";
import keys from "../../../../public/finalsketch.png";
import finalsketchver1 from "../../../../public/finalver1.png";
import desktopwf from "../../../../public/desktopwf.png";
import tabwf from "../../../../public/tabwf.png";
import mobilewf from "../../../../public/mobilewf.png";
import hifiver1 from "../../../../public/hifiver1.png";
import yalever2 from "../../../../public/yalehifiver2.png";

const page = () => {
  return (
    <>
      <section
        className="relative flex flex-col flex-grow max-container padding-container"
        id="YaleSchoolOfArt_banner"
      >
        <a href="/work#work">
          <button className="absolute mt-16 left-20 p-4 flex items-center gap-2 z-10 hover:bg-[#f3f3f3] px-4 py-1 rounded-[500px]">
            <span>←</span> BACK{" "}
          </button>
        </a>
        <Image src={banner} alt="home background image" />
      </section>
      <section
        id="partiful"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20 max-w-[894px] mx-auto"
      >
        <h3 className="text-[48px] font-semibold">
          Yale School of Art Redesign
        </h3>
        <h4 className="text-lg link_gray font-medium -mt-2">
          Redesign of the Yale School of Art Website for Enhanced Accessibility
          and Coherence.
        </h4>
        <p className="">Timeline: March 2024</p>
        <p className="my-8">
          During this project sprint, I identified an existing platform with
          usability and navigation issues and redesigned its main landing page.
          By utilizing fundamental design concepts, I enhanced the platform's
          accessibility, navigation, and design coherence. Following the
          redesign in Figma, the updated design was implemented using HTML and
          CSS.
        </p>
        <hr />
        <div className="flex flex-row">
          {/* Core Team Section */}
          <div className="mt-8 mr-24">
            <h5 className="text-xl font-semibold mb-3 max-w-[157px]">Team</h5>
            <ul className="list-none">
              <li className="flex flex-col">
                {" "}
                <p>Dave Song</p>{" "}
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
              <li>Frontend Dev</li>
            </ul>
          </div>
        </div>
        {/* Part 1: Identifying Usability Problems */}
        {/* part 1 problem statememt */}
        <h3 className="mt-20 text-[32px]">
          Part 1: Identifying Usability Problems
        </h3>
        <hr className="mb-10" />
        <p>
          <a href="https://www.art.yale.edu/" className="underline">
            Yale School of Art Landing Page
          </a>{" "}
          was selected as the target platform page for the scope of the project.
        </p>
        <Image
          src={yalesoabefore}
          alt="yale school of art design before"
          className="rounded"
        />
        <p className="app_gray text-sm">
          Yale School of Art Landing Page (Official)
        </p>
        <h4 className="text-[24px] mt-10">Why Yale School of Art Website?</h4>
        <p className="app_gray">
          The website serves as a wiki for the Yale School of Art, allowing both
          students and staff to make edits. Although the website's open-edit
          nature poses challenges in maintaining cohesive design and
          organization over time, these characteristics make it a fascinating
          subject for study and analysis. I am interested in exploring how
          various individuals with access have collaboratively influenced the
          website's structure. If meaningful patterns or structures can be
          identified, I would like to incorporate such elements into the new
          design.
        </p>
        <h4 className="text-[20px] mt-10">Usability Analysis: </h4>
        <div>
          <h4 className="font-bold mt-4">Efficiency</h4>
          <p>The user flow was not efficient due to:</p>
          <ul className="list-disc ml-4 mt-4">
            <li>Repeated content on the same page.</li>
            <li>
              No central navigation system on the page as user scrolls down.
            </li>
            <li>
              Repeated sections on Upcoming events for general & School of Art
              specific events.
            </li>
            <li>
              Layout of the content. Most of the content is displayed on the
              left side of the page.
            </li>
            <li>
              Interesting since they even have a “sitemap” since it is difficult
              to navigate the website
            </li>
          </ul>

          <h4 className="font-bold mt-4">Learnability</h4>
          <p>
            Users struggle learning and perceiving purpose of each section on
            the landing page due to:
          </p>
          <ul className="list-disc ml-4 mt-4">
            <li>Lack of grouping of relevant elements with coherent designs</li>
            <li>
              Too many colors are used without any semantic or systematic
              meaning. (e.g., Yellow grouping was used to Quicklinks,
              introduction, community bulletin board, and other information as
              well)
            </li>
            <li>
              There are multiple links and sections where current students and
              staff can access to make edits to the wiki. This complicates the
              organization, making it difficult for users to follow the general
              structure of the wiki and learn the overall structure of the page.
            </li>
            <li>
              Fonts used and sizing are irregular. Although the website “exists
              as an ongoing collaborative experiment in digital publishing and
              information sharing”, such lack of information hierarchy makes it
              easier to share unorganized information but difficult to learn
              what's out there.
            </li>
          </ul>

          <h4 className="font-bold mt-4">Memorability</h4>
          <p>
            Because the website's purpose is to experiment with digital
            publishing and information sharing, it is difficult to find and
            remember information presented due to:
          </p>
          <ul className="list-disc ml-4 mt-4">
            <li>
              No visual distinction of main publishing & information shared.
            </li>
            <li>Lack of foreground utilization.</li>
            <li>
              Multiple repeated sections on upcoming events distracts users from
              actually accessing the digital publications and information
              uploaded.
            </li>
            <li>Use of primary colors makes it distracting.</li>
          </ul>

          <h4 className="font-bold mt-4">Overall Review</h4>
          <p>
            All in all, the Yale School of Art website displays an interesting
            case study for usability since it is effectively maintained by
            community members. While it is interesting to note the general
            structures they have developed over the years, overall use of
            primary colors, lack of information organization, no information
            hierarchy, as well as general grouping that enable efficient
            navigation of the website makes it difficult to achieve the goal the
            website says in its introductory statement.
          </p>

          <h4 className="font-bold mt-4">Layout Elements</h4>
          <p>
            Here are some of the fundamental design concepts I utilized during
            the redesign and development process.
          </p>
          <ol>
            <li className="ml-5">
              color, grouping, proximity, similarity, closure, continuity,
              common region, figure ground(Foreground vs. background)
            </li>
          </ol>
          <h4 className="text-[24px] mt-10">Checking Accessibility</h4>
          <p className="mt-5">
            The{" "}
            <a href="https://wave.webaim.org/" className="underline">
              WAVE
            </a>{" "}
            evaluation highlighted several accessibility issues. Three of the
            main errors were due to the images on the landing page lacking
            alternative texts. In addition to the absence of alternative texts
            for images, there were also issues with color contrasts in some
            sections. Most interestingly, most of the titles and headings were
            not actually heading elements, not adhering to standard semantic tag
            practices, which makes it difficult for assistive technologies to
            navigate through the page. Besides those issues identified by WAVE,
            I was concerned about how such an evaluation system failed to
            identify readability issues with some elements (displayed below).
          </p>
          <Image src={yaleissue} alt="issue image" className="rounded mt-4" />
        </div>
        {/* part 2 */}
        <section>
          <h3 className="mt-20 text-[32px]">Part 2: Visual Design</h3>
          <hr className="mb-10" />
          <h4 className="text-[24px] mt-10">Speed Sketching</h4>
          <Image src={speedsketch} alt="speed sketch images" />
          <p>
            In addition to creating nine speed sketches to experiment with
            layout options, it was crucial to perform a critical analysis of the
            information organization and architecture of the landing page, as
            the main problems were difficult navigation and repetitive links and
            routes. To have an effective 'ongoing collaborative experiment in
            digital publishing and information sharing,' I believe it requires a
            more accessible and organized structure to display those
            experimental publications and works. The two images below show the
            high-level organization of wiki information before and after the
            structure optimization, focusing on the landing page.
          </p>

          <h4 className="text-[24px] mt-10">
            Yale School of Art Website Information Architecture: Before
          </h4>
          <Image src={infobefore} alt="information architecture before" />
          <h4 className="text-[24px] mt-10">
            Yale School of Art Website Information Architecture: After
          </h4>
          <Image src={infoafter} alt="information architecture after" />

          <h4 className="text-[24px] mt-10">Final Sketch</h4>
          <h4 className="text-[20px] mt-4">
            Key Design Elements From Sketches
          </h4>
          <ul className="list-disc ml-4">
            <li>Navigation Bar visible and organized for easier navigation.</li>
            <li>
              Wanted to maintain the overall structure of the landing page with
              the left side displaying the content while increasing the
              readability and accessibility.
            </li>
            <li>
              Wanted to optimize the information display with custom UI cards
              for several information types such as Exhibition, Publication, and
              events.
            </li>
          </ul>
          <Image src={keys} alt="key features" />
          <p>
            Incorporating these three key features as well as some of layout
            optimizations, I could develop a final sketch.
          </p>
          <h4 className="text-[24px] mt-10">Final Sketch Version 1</h4>
          <Image src={finalsketchver1} alt="final sketch version 1" />
        </section>
        <section>
          <h3 className="mt-20 text-[32px]">
            Part 3: Low-Fidelity Wireframing
          </h3>
          <hr />
          <p>
            Please visit this{" "}
            <a
              className="underline"
              href="https://www.figma.com/proto/MhM02lu8y3AK7qwjfgfTRP/CSCI1300-Responsive-Design-Project?page-id=0%3A1&node-id=226-300&viewport=303%2C-106%2C0.03&t=MpZTRJOKwSRbkXtb-1&scaling=contain&starting-point-node-id=226%3A300"
            >
              figma link
            </a>{" "}
            to view the wireframes.
          </p>
          <h4 className="text-[20px] mt-4">Desktop</h4>
          <Image
            src={desktopwf}
            alt="desktop wireframe"
            className="max-w-[600px]"
          />
          <h4 className="text-[20px] mt-4">Tablet</h4>
          <Image src={tabwf} alt="tablet wireframe" className="max-w-[600px]" />
          <h4 className="text-[20px] mt-4">Mobile</h4>
          <Image
            src={mobilewf}
            alt="mobile wireframe"
            className="max-w-[600px]"
          />
        </section>
        <section>
          <h3 className="mt-20 text-[32px]">Part 4: High-Fidelity Mockups</h3>
          <hr />
          <p>
            Based on the developed wireframes, the first iterations of the
            high-fidelity prototypes were created. Please visit{" "}
            <a
              className="underline"
              href="https://www.figma.com/proto/MhM02lu8y3AK7qwjfgfTRP/CSCI1300-Responsive-Design-Project?page-id=1%3A2&node-id=36-2471&viewport=212%2C384%2C0.05&t=SDqF4SQfhTBkEYZE-1&scaling=min-zoom&starting-point-node-id=36%3A2016"
            >
              this Figma link
            </a>{" "}
            to view the hi-fi prototypes for tablets and mobile devices.
          </p>
          <Image
            src={hifiver1}
            alt="hifi prototype version 1"
            className="mt-10"
          />
          <h3 className="mt-20 text-[32px]">Part 5: Feedback & Iteration</h3>{" "}
          <hr />
          <p className="mb-10">
            I have also developed another high-fidelity prototype with a
            different arrangement of components (using the same UI layouts) and
            conducted a simple readability and layout comparison test to
            evaluate accessibility and readability. Upon completing the
            comparison tests, I decided to switch to the second draft of the
            high-fidelity prototype, which is displayed below. To access the
            full prototype, please use{" "}
            <a
              className="underline"
              href="https://www.figma.com/proto/MhM02lu8y3AK7qwjfgfTRP/CSCI1300-Responsive-Design-Project?page-id=1%3A3&node-id=61-717&viewport=-786%2C220%2C0.14&t=quMXbDh5nHVa2cvt-1&scaling=scale-down&starting-point-node-id=61%3A717"
            >
              this link
            </a>
            . (6 out of 9 participants reported that they are more comfortable
            with the structure of the second version of the high-fidelity
            prototype).
          </p>
          <Image src={yalever2} alt="hi-fi version 2 prototype image" />
        </section>
        <h3 className="mt-20 text-[32px]">Part 6: Development</h3>
        <hr />
        <p>
          Based on the high fidelity prototypes for the three devices,a
          responsive version of webpage was developed using HTML and CSS. Link
          to the responsive website:{" "}
          <a
            className="underline"
            href="https://dv-song.github.io/cs1300_responsive_design/"
          >
            Yale School of Art Redesign
          </a>
        </p>
        <h3 className="mt-20 text-[32px]">Conclusion & Lessons</h3>
        <hr />
        <p className="mb-10">
          As a student studying computer science, it is quite rare for me to
          engage in an end-to-end development project that includes identifying
          a client, designing prototypes, developing high-fidelity flows, and
          the actual development of the designs. Additionally, considering the
          compositions and arrangements of the designs and the developed version
          of the webpage for all device sizes was new but rewarding. Knowing
          that the web app can deliver an optimal user experience regardless of
          device size was particularly satisfying.
        </p>
      </section>
    </>
  );
};

export default page;
