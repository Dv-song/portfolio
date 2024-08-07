import Portfolio from "@/components/Portfolio";
import React from "react";
import banner from "@/public/partifulbanner.png";

const content: any = [
  { type: "header_image", src: "/partifulbanner.png" },
  {
    type: "project_intro",
    company: "Hander",
    subtitle:
      "With a mission to decrease the carbon footprint of college students",
    timeline: "March 2023 - Present",
    explanation:
      "Hander is an online platform that enables college students nationwide to buy and sell used items and gadgets securely within the vicinity of their institutions. Since the spring of 2023, I have led the research and development cycles for the platform. As of spring 2024, we are developing Android and iOS apps to better target students.",
  },
  {
    type: "role_section",
    role: "One of the co-founders of the startup company. As the CEO and Product Manager, I am in charge of managing UI/UX design, user research, and the development cycle.",
    team: [
      { "Dave Song": "CEO | Product Manager" },
      { "Eric Kim": "CXO | Designer" },
      { "Caden Chou": "COO | Developer" },
      { "Nuo Wen Lei": "CTO | Developer" },
    ],
    skills: [
      "UX Research",
      "Wire-framing",
      "Prototyping",
      "User Testing",
      "Full-stack development",
      "Product Management",
    ],
  },
  { type: "image", src: "/partifulbanner.png" },
  { type: "image_full", src: "/partifulbanner.png" },
  { type: "header", text: "Problem Identification" },
  { type: "section_subtitle", text: "Growth & Reflection" },
  {
    type: "body_text",
    text: " Hander was started not for revenue generation but to pursue what we \
          believed was the most meaningful and impactful for college \
          communities. Since most of the MVP development and user interviews \
          were conducted during the semester, it was essential to adhere to \
          agile methodology. In fact, the most important lesson was the \
          experience of leading a real-world project with design and engineering \
          teams. It was crucial to organize and prioritize work and utilize \
          rapid prototyping with wireframes to explore ideas while conserving \
          the resources and time of the engineering team. We are planning to \
          implement some of the exciting features for the platform this summer \
          and can't wait to grow with the company. The workflow chart below \
          provides a high-level overview of the flow chart I have developed for \
          our teams to increase efficiency during the semester. ",
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
