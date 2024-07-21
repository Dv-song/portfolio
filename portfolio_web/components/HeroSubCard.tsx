import React from "react";

type SubCardProps = {
  title: string;
  content: string[];
};

const HeroSubCard = ({ title, content }: SubCardProps) => {
  return (
    <>
      <div className="light_gray_bg min-h-[168px] max-w-[432px] px-8 py-4 mt-8 rounded border-1 border-[#cecece]">
        <p className="link_gray mb-5">{title}</p>
        {content.map((update) => (
          <p className="dark_gray_text max-w-[450px] text-[14px] mb-3">
            {update}
          </p>
        ))}
      </div>
    </>
  );
};

export default HeroSubCard;
