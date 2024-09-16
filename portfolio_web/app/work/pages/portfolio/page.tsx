import Portfolio from "@/components/Portfolio";
import React from "react";

const content: any = [
  {
    type: "header_image",
    src: "/work_pages/portfolio_page/portfolio_banner.jpg",
  },
  {
    type: "project_intro",
    company: "Portfolio Website",
    subtitle: "",
    timeline: "July 2024 - Present",
    explanation:
      "For recruiters and friends interested in learning more about me & for myself.",
  },
  { type: "header", text: "Why Do I Need a Personal Website/Portfolio?" },

  { type: "image_full", src: "/work_pages/portfolio_page/portfolio_img1.png" },
  { type: "section_subtitle", text: "How It All Started" },
  {
    type: "list",
    contentList: [
      "Honestly, I got into computer science and engineering by accident. Back in high school, I was working on a design project to solve a problem that hit a little too close to home—literally. One of my classmates got hit by a car on campus, and I couldn’t shake the thought that it might have been preventable.",
      "So, I set out to lower the risks caused by distracted drivers and pedestrians glued to their smartphones. I wasn’t thinking about the tech world at the time; I just wanted to make something that worked.",
      "That’s how I ended up diving into the “functionality” part of the project, and before I knew it, I was neck-deep in code.",
    ],
    color: "portfolio_text_color",
  },
  { type: "section_subtitle", text: "@ Brown University" },
  {
    type: "list",
    contentList: [
      "Fast forward to Brown University—home of the Open Curriculum, where I could mix and match courses like I was building my own personal playlist. I’ve always been torn between design and engineering (or let’s be honest, just building things).",
      "My first year was a whirlwind of exploring everything from Architecture and Urban Studies to RISD design classes. I pretty much “abused” the Open Curriculum to its fullest.",
      "By the time I hit the end of my second year, I declared Computer Science as my concentration. Sure, the courses were tough (in a fun, mind-bending kind of way), but I never let go of the design side either. I kept sneaking into RISD, collaborating with artists, and letting my creative side breathe through extracurriculars.",
    ],
    color: "portfolio_text_color",
  },
  { type: "section_subtitle", text: "Quarter Life Crisis!" },
  {
    type: "list",
    contentList: [
      "But here’s the thing: I never quite fit into one specific box at Brown. I wasn’t one of the genius artists at RISD, but I wasn’t the hardcore coding wizard who could knock out an assembly language assignment like it was nothing either. ",
      "I’ve always felt like I was floating somewhere in between, like an outsider in both worlds.",
      "So, what’s a person supposed to do? For me, computer science became a way to create frameworks—to systematically approach design questions and tackle complex, sociotechnical problems. It wasn’t just about code; it was about using that code to understand and solve the messy, real-world issues I kept running into.",
    ],
    color: "portfolio_text_color",
  },
  { type: "section_subtitle", text: "Where I’m At Now" },
  {
    type: "list",
    contentList: [
      "As I head into my senior year, this website has become more than just a portfolio.",
      "It’s my way of trying to figure out who I am as a professional, pulling together all the work I’ve done into one cohesive space on the internet. I like to think of it as running a kind of “regression” on my own life.",
      "By looking at all these “data points” (aka projects and experiences), maybe I can finally pin down what exactly I’m aiming for—professionally and personally.",
      "In a sense, this site isn’t just for recruiters or collaborators. It’s for me, too.",
    ],
    color: "portfolio_text_color",
  },

  { type: "section_subtitle", text: "Tech Used" },
  {
    type: "list",
    contentList: [
      "Next.js",
      "TypeScript",
      "React with Tailwind CSS",
      "Figma for high-fidelity design and asset generation",
    ],
    color: "portfolio_text_color",
  },
];

const Page = () => {
  return (
    <div>
      <Portfolio content={content} />
    </div>
  );
};

export default Page;
