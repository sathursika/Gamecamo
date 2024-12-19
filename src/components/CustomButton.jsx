import React from "react";

const CustomButton = ({ text = "Contact us", onClick, className }) => {
  return (
    <button
      className={`w-[131.77px] h-[41.34px] rounded-md border-2 border-transparent bg-black border-[#e87d0e] text-white text-[15px] font-medium transition duration-300 ease-in-out hover:border-[#e87d0e] hover:bg-black hover:text-[#e87d0e] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
