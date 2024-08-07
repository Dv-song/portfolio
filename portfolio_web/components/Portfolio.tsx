import React from "react";

interface HeaderImageProps {
  type: "header_image";
  src: string;
}

interface ProjectIntroProps {
  type: "project_intro";
  company: string;
  subtitle: string;
  timeline: string;
  explanation: string;
  accentColor?: string;
}

interface RoleSectionProps {
  type: "role_section";
  role: string;
  team: { [name: string]: string }[];
  skills: string[];
}

interface ImageProps {
  type: "image";
  src: string;
}

interface FullWidthImageProps {
  type: "image_full";
  src: string;
}

interface HeaderProps {
  type: "header";
  text: string;
  accentColor?: string;
}

interface SectionSubtitleProps {
  type: "section_subtitle";
  text: string;
}

interface BodyTextProps {
  type: "body_text";
  text: string;
}

// Union type for content items
type ContentItem =
  | HeaderImageProps
  | ProjectIntroProps
  | RoleSectionProps
  | ImageProps
  | FullWidthImageProps
  | HeaderProps
  | SectionSubtitleProps
  | BodyTextProps;

interface PortfolioProps {
  content: ContentItem[];
}

const HeaderImage = ({ src }: { src: string }) => {
  return (
    <div className="portfolio_header mt-16">
      <a href="/work#work">
        <button className="portfolio_back_btn absolute mt-20 left-20 p-4 flex items-center gap-2 z-10 hover:bg-[#f3f3f3] px-4 py-1 rounded-[500px]">
          <span>←</span> BACK{" "}
        </button>
      </a>
      <img src={src} alt="Header" className="w-full h-auto" />
    </div>
  );
};

const ProjectIntro = ({
  company,
  subtitle,
  timeline,
  explanation,
  accentColor = "#000000",
}: ProjectIntroProps) => (
  <div className="relative flex flex-col flex-grow py-2 px-10 max-w-[1000px] mx-auto">
    <h1
      className="text-[48px] font-semibold"
      style={{
        background: `linear-gradient(to left, black, ${accentColor})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {company}
    </h1>
    <h2 className="text-lg link_gray font-medium -mt-2 italic">{subtitle}</h2>
    <p className="text-sm">Timeline: {timeline}</p>
    <p className="my-8">{explanation}</p>
    <hr />
  </div>
);

const RoleSection = ({ role, team, skills }: RoleSectionProps) => (
  <div className="py-2 px-10 max-w-[1000px] mx-auto">
    <div>
      <h3 className="text-2xl font-semibold mb-3">Role</h3>
      <p className="mb-8">{role}</p>
    </div>
    <div className="flex flex-col">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Core Team</h3>
        <div className="flex flex-wrap lg:flex-row justify-between">
          {team.map((member, index) => {
            const name = Object.keys(member)[0];
            const role = member[name];
            return (
              <div key={index} className="mb-4">
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-gray-400">{role}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3">Top Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="work_tag_portfolio text-black">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const StandardImage = ({ src }: { src: string }) => (
  <div className="max-w-[1000px] px-10 mx-auto my-8">
    <img src={src} alt="Standard" className="w-full h-auto" />
  </div>
);

const FullWidthImage = ({ src }: { src: string }) => (
  <div className="portfolio_header my-8">
    <img src={src} alt="Full Width" className="w-full h-auto" />
  </div>
);

const Header = ({ text }: { text: string }) => (
  <div className="max-w-[1000px] px-10 w-full">
    <h2 className="hander_gradient mt-20 text-[24px]">{text}</h2>
  </div>
);

const SectionSubtitle = ({ text }: { text: string }) => (
  <div className="max-w-[1000px] px-10  w-full mb-10">
    <h3 className="link_gray text-lg font-medium w-full">{text}</h3>
    <hr />
  </div>
);

const BodyText = ({ text }: { text: string }) => (
  <div className="max-w-[1000px] px-10  w-full">
    <p>{text}</p>
  </div>
);

// Main Portfolio component
const Portfolio = ({ content }: PortfolioProps) => {
  return (
    <div className="flex flex-col items-center">
      {content.map((item, index) => {
        switch (item.type) {
          case "header_image":
            return <HeaderImage key={index} src={item.src} />;
          case "project_intro":
            return <ProjectIntro key={index} {...item} />;
          case "role_section":
            return <RoleSection key={index} {...item} />;
          case "image":
            return <StandardImage key={index} src={item.src} />;
          case "image_full":
            return <FullWidthImage key={index} src={item.src} />;
          case "header":
            return <Header key={index} text={item.text} />;
          case "section_subtitle":
            return <SectionSubtitle key={index} text={item.text} />;
          case "body_text":
            return <BodyText key={index} text={item.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Portfolio;
