import React from "react";

type SubCardProps = {
  title: string;
  content: string[];
};

const HeroSubCard = ({ title, content }: SubCardProps) => {
  return (
    <>
      <div className="light_gray_bg min-h-[180px] lg:min-h-[168px] w-[350px] lg:w-[430px] px-8 py-4 mt-5 rounded-lg screen-lg:mx-0 mx-auto">
        <p className="dark_gray_text mb-5">{title}</p>
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
