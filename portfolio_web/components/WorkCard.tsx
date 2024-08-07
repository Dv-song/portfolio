import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  };
}

const WorkCard: React.FC<WorkProps> = ({ work }) => {
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
      <div className="work_card max-w-[360px] h-[436px] flex flex-col justify-between mb-14 image-shadow">
        <div>
          {work.coverimg.length === 2 ? (
            <Image
              src={work.coverimg[1]}
              alt={work.title}
              className="card_cover h-[300px] object-cover mb-2 rounded"
            />
          ) : (
            <Image
              src={work.coverimg[0]}
              alt={work.title}
              className="card_cover h-[300px] object-cover mb-2 rounded"
            />
          )}
          <div>
            <div className="flex flex-row justify-between app_gray text-sm">
              <p>{work.position}</p>
              <p>{work.time}</p>
            </div>

            <h5 className="text-lg font-semibold">{work.title}</h5>
            <p className="app_gray italic">{work.subtitle}</p>
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

export default WorkCard;
