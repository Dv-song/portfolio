"use client";
import React from "react";

const Backbutton = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className=" fixed w-full max-w-[1300px] mx-auto">
      <button
        onClick={goBack}
        className="absolute portfolio_back_btn top-20 left-20 p-4 flex items-center gap-2 z-10 hover:bg-[#f3f3f3] px-4 py-1 rounded-[500px]"
      >
        <span>←</span> BACK
      </button>
    </div>
  );
};

export default Backbutton;
