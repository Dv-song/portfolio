import React from "react";

const Button = (props: { text: string; color: string }) => {
  return (
    <button
      type="button"
      className={`bg-[${props.color}] text-white py-[12px] px-[32px]`}
    >
      {props.text}
    </button>
  );
};

export default Button;
