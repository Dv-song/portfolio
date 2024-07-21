import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const SelectedWorkCardLong: React.FC<WorkProps> = ({ work }) => {
  return (
    <Link href={work.href}>
      <div className="work_card max-w-[360px] h-[436px] flex flex-col justify-between mb-14 image-shadow">
        <div>
          <Image
            src={work.coverimg}
            alt={work.title}
            className="card_cover w-full object-cover mb-2 rounded"
          />
          <div>
            <div className="flex flex-row justify-between app_gray text-sm">
              <p>{work.position}</p>
              <p>{work.time}</p>
            </div>

            <h5 className="text-lg font-semibold">{work.title}</h5>
            <p className="app_gray italic">{work.subtitle}</p>
          </div>
        </div>
        <div className="flex mt-2">
          {work.skilltags?.map((tag) => (
            <span key={tag} className="app_gray mr-4 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SelectedWorkCardLong;
