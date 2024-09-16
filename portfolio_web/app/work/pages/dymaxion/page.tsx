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
    timeline: "May 2024 - August 2024",
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
  { type: "header", text: "My Impact" },
  {
    type: "list",
    contentList: [
      "Ideated and evaluated product workflows for both the company's web and mobile application services.",
      "Implemented 15+ pages and workflows for the company’s web app, including design portfolio, pricing, and interior design style quiz pages.",
      "Led the development of an iOS application utilizing Apple’s RoomPlan and QuickLook APIs to provide fast and reliable spatial data from users' smartphones.",
    ],
    color: "portfolio_text_color",
  },
  { type: "header", text: "Reflection & Growth" },
  { type: "section_subtitle", text: "TL;DR" },
  {
    type: "list",
    contentList: [
      "Extensive self-learning and exploration with a strong attention to detail for pixel-perfect implementation of product prototypes.",
      "Gained exposure to LLM model reasoning, Retrieval-Augmented Generation (GraphRAG), alongside conventional web development tools.",
      "Effective communication is essential for constructive and successful project execution.",
    ],
    color: "portfolio_text_color",
  },
  {
    type: "body_text",
    text: "At Dymaxion, I developed a diverse set of skills, both technical and interpersonal, that have been instrumental in my involvement with entrepreneurial organizations at Brown University and various startups. My exposure to the end-to-end development of client-facing products provided valuable insights into how technical implementations and user story details directly impact business strategies and revenue models. This experience allowed me to gain a deeper understanding of product development beyond just coding, connecting technical solutions with broader business objectives.",
    style: "",
  },
  {
    type: "body_text",
    text: "Working as a software engineer intern for Dymaxion required significant self-learning and a commitment to perfection. Although my work was primarily focused on front-end development, I was responsible for delivering pixel-perfect implementations of high-fidelity prototypes created by designers, catering to both tech-savvy and design-conscious customers. This involved extensive use of custom CSS, Bootstrap CSS, React, Swift, and JavaScript. I also participated in algorithm research, which required an in-depth understanding of spatial modeling, incorporating LLMs for reasoning, and using RAG to optimize recommendation accuracy.",
    style: "",
  },
  {
    type: "body_text",
    text: "Lastly, I’ve come to appreciate the interpersonal skills I gained from working with startups. As an intern, many implementation details and final prototype designs were shaped through conversations between engineers and designers. This involved explaining technical concepts to non-technical team members from design or interior design teams. Despite being an intern, when I had a valid rationale from an engineering perspective, I learned to lead discussions, modifying final prototypes to improve scalability and feasibility based on project priorities.",
    style: "",
  },
  {
    type: "body_text",
    text: "While I can’t share technical details, I’d be happy to discuss my experience further. Feel free to reach out!",
    style: "italic",
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
