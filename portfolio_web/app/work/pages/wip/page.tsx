import React from "react";
import wip from "@/public/wip.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="portfolio_header mt-16">
        <a href="/work#work">
          <button className="portfolio_back_btn absolute mt-20 left-20 p-4 flex items-center gap-2 z-10 hover:bg-[#f3f3f3] px-4 py-1 rounded-[500px]">
            <span>←</span> BACK{" "}
          </button>
        </a>
        <Image src={wip} alt="Header" className="w-full" />
      </div>
    </>
  );
};

export default page;
