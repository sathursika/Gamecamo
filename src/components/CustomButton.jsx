import React from "react";

const CustomButton = ({ text = "Contact us", onClick, className }) => {
  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick(e);
    } else {
      console.error("onClick is not a function");
    }
  };

  return (
    <button
      className={`w-[131.77px] h-[41.34px] rounded-md border-2 border-transparent border-[white] text-white text-[15px] font-medium transition duration-300 ease-in-out hover:border-[#e87d0e] hover:bg-black hover:text-[#e87d0e] ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
