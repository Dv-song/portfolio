import React from "react";

const Backbutton = () => {
  return (
    <a href="/work#work" className="absolute w-full max-w-[1300px]">
      <button className="relative portfolio_back_btn mt-20 left-20 p-4 flex items-center gap-2 z-10 hover:bg-[#f3f3f3] px-4 py-1 rounded-[500px]">
        <span>←</span> BACK{" "}
      </button>
    </a>
  );
};

export default Backbutton;
