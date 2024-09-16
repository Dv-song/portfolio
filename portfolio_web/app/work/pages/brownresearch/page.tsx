import Portfolio from "@/components/Portfolio";
import React from "react";

const content: any = [
  { type: "header_image", src: "/work_pages/brown_llmresearch.jpg" },
  {
    type: "project_intro",
    company: "Brown University & RI Hospital",
    subtitle: "Developing an Automated Redaction Pipeline with Local LLMs",
    timeline: "May 2024 - Present",
    explanation:
      "In collaboration with the MedDB Group at Brown University’s Database Systems Lab and Lifespan Hospital, I am working on an automated system designed to redact Protected Health Information (PHI) from medical datasets. Leveraging large language models (LLMs), this system focuses on removing PHI from unstructured clinical notes, enhancing both accuracy and context sensitivity.",
  },
  {
    type: "role_section",
    role: "Undergraduate Research Assistant",
    role_description:
      "Developing an automated redaction pipeline, testing functionality with OpenAI API and public datasets, while preparing Llama 3.1 for production use. I’m using DSPy for prompt engineering and optimization as we work towards securing real patient datasets from Lifespan Hospital.",
    team: [
      { "MedDB Group @ Brown CS": "Principal Investigator - Ugur Cetintemel" },
      {
        "Neurosurgery @ RI Hospital": "Shane Lee (PhD), Wael Asaad (MD, Phd)  ",
      },
    ],
    skills: [
      "Large Language Models",
      "Prompt Engineering",
      "Medical Databases",
      "DSPy",
    ],
  },
  {
    type: "header",
    text: "Problem: Why Develop an Automated Redaction Pipeline? ",
  },
  { type: "section_subtitle", text: "Current Challenges & Practices" },
  {
    type: "body_text",
    text: "Strict adherence to ethical and legal requirements, such as HIPAA, is critical when handling sensitive patient information. Under HIPAA, 18 identifiers are classified as PHI, and failing to anonymize these can result in significant legal and ethical issues. Traditional methods—such as manual redaction, rule-based systems, and conventional NLP models—struggle with context-dependent PHI, leading to potential oversights. The LLM-based pipeline addresses these limitations, offering a more sophisticated approach by integrating local LLMs into the redaction process.",
  },
  { type: "section_subtitle", text: " " },
  { type: "section_subtitle", text: "Fall '24 Updates" },
  {
    type: "list",
    contentList: [
      "I will keep this page updated throughout the semester as our team makes further advancements in this project!",
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
