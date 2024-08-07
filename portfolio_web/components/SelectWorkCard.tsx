"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { workTypes } from "@/constants";

interface WorkProps {
  work: {
    href: string;
    id: number;
    title: string;
    position: string;
    time: string;
    subtitle: string;
    skilltags: string[];
    coverimg: any;
    tag: boolean;
    tagtxt: string;
    category: string | string[];
    selected: boolean;
    cover_logo?: any;
    cover_text?: string;
  };
}

const SelectedWorkCard: React.FC<WorkProps> = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTagClass = (tag: string) => {
    if (tag === "Internship") {
      return "";
    } else if (tag === "Startup") {
      return "";
    } else if (tag === "Research") {
      return "";
    } else if (tag === "Project") {
      return "";
    } else if (tag === "Internship") {
      return "";
    }

    for (const worktype of workTypes) {
      if (worktype.type === "design" && worktype.tags.includes(tag)) {
        return "work_tag_design";
      } else if (
        worktype.type === "engineering" &&
        worktype.tags.includes(tag)
      ) {
        return "work_tag_engn";
      }
    }

    return "";
  };

  return (
    <Link href={work.href}>
      <div
        className={`work_card flex flex-col justify-between mb-8 image-shadow max-w-[420px] pb-5 rounded-[8px]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="">
          <div id="workcard_cover_img" className="relative">
            <Image
              src={work.coverimg[0]}
              alt={work.title}
              className="card_cover object-cover mb-2 rounded-[8px]"
            />
            <div
              className={`absolute inset-0 ml-[1rem] mt-[1rem] text-white work_card_time_tag`}
            >
              {work.time}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {work.cover_logo ? (
                <Image
                  src={work.cover_logo}
                  alt="cover logo"
                  className="mb-2"
                />
              ) : null}
              <p
                className={`text-center max-w-[85%] ${
                  work.title === "Hander"
                    ? "text-[#868686] mt-[430px]"
                    : work.title === "Reso"
                    ? "text-[#868686] mb-[150px]"
                    : work.title === "Partiful"
                    ? "mb-[100px] text-white"
                    : "text-white"
                }`}
              >
                {work.cover_text}
              </p>
            </div>
            <div
              className={`cover_overlay ${
                isHovered ? "opacity-1" : "opacity-0"
              }`}
            >
              <button className="learn_more_btn">Learn More</button>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between app_gray text-sm">
              <p>{work.position}</p>
              <p>{work.time}</p>
            </div>

            <h5 className="text-lg font-semibold">{work.title}</h5>
          </div>
        </div>
        <div className="mt-2 flex-wrap">
          {work.skilltags?.map((tag) => (
            <span
              key={tag}
              className={`work_tag whitespace-nowrap ${getTagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SelectedWorkCard;
