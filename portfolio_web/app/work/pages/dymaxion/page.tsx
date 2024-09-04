import Portfolio from "@/components/Portfolio";
import React from "react";

const content: any = [
  {
    type: "header_image",
    src: "/dymaxionbanner.jpg",
  },
  {
    type: "project_intro",
    company: "Dymaxion",
    subtitle:
      "Making interior design more accessible through automated furniture recommendation algorithms.",
    timeline: "March 2023 - Present",
    explanation:
      "Dymaxion is a San Francisco-based tech startup focused on making interior design more accessible. They offer an AI-driven design platform that automates traditionally high-commitment and costly interior design processes. By partnering with design studios and online retailers, Dymaxion aims to simplify interior design consultancy and furniture recommendations, making them more accessible and frictionless for everyone.",
  },
  {
    type: "role_section",
    role: `Software Engineer Intern`,
    role_description:
      "I was responsible for maintaining and optimizing the user experience on the company's web services and spearheading the development of the company's iOS application using Swift.",
    team: [
      {
        "Dymaxion AI Team":
          "1 PM, 3 SWEs / Researchers, 3 Software Engineering Interns, and 1 Product Designer",
      },
    ],
    skills: [
      "Full-Stack Development",
      "iOS Development",
      "Swift",
      "Fast API",
      "React",
      "JavaScript",
    ],
  },
  { type: "image_full", src: "/work_pages/dymaxionproduct_image.jpg" },
  { type: "header", text: "Impact" },
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
