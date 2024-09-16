import React from "react";
import wip from "@/public/wip.png";
import Image from "next/image";
import Backbutton from "@/components/Backbutton";

const page = () => {
  return (
    <>
      <div className="portfolio_header mt-16">
        <Backbutton />
        <Image src={wip} alt="Header" className="w-full" />
      </div>
    </>
  );
};

export default page;
