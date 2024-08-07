import React from "react";

const Button = (props: { text: string; color: string }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: props.color }}
      className={`text-white py-[12px] px-[32px] min-w-[170px] rounded font-bold max-md:min-w-[200px]`}
    >
      {props.text}
    </button>
  );
};

export default Button;
