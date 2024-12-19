import React from "react";
import CustomButton from "../components/CustomButton"; // Reusable button component

const Contact = () => {
  return (
    <section className="w-full bg-black py-10">
      <div className="w-full max-w-7xl mx-auto relative p-10 rounded-[100px] shadow-md" style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.5)" }}>
        {/* Title */}
        <header className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e87d0e]">Gamecamo</h2>
          <p className="text-xl sm:text-2xl font-light text-[#e87d0e]">Powered by ProDesigner</p>
        </header>

        {/* Form Fields */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              className="w-full h-16 rounded-[40px] border-2 border-[#e87d0e] px-4 text-sm text-[#e87d0e] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#e87d0e] transition-all ease-in-out duration-300 hover:border-[#e87d0e]"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              className="w-full h-16 rounded-[40px] border-2 border-[#e87d0e] px-4 text-sm text-[#e87d0e] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#e87d0e] transition-all ease-in-out duration-300 hover:border-[#e87d0e]"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              className="w-full h-16 rounded-[40px] border-2 border-[#e87d0e] px-4 text-sm text-[#e87d0e] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#e87d0e] transition-all ease-in-out duration-300 hover:border-[#e87d0e]"
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              className="w-full h-16 rounded-[40px] border-2 border-[#e87d0e] px-4 text-sm text-[#e87d0e] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#e87d0e] transition-all ease-in-out duration-300 hover:border-[#e87d0e]"
              placeholder="Phone Number"
            />
          </div>

          {/* Subject */}
          <div className="relative col-span-2">
            <input
              type="text"
              className="w-full h-16 rounded-[40px] border-2 border-[#e87d0e] px-4 text-sm text-[#e87d0e] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#e87d0e] transition-all ease-in-out duration-300 hover:border-[#e87d0e]"
              placeholder="Subject"
            />
          </div>

          {/* Message */}
          <div className="relative col-span-2">
            <textarea
              className="w-full h-52 rounded-[40px] border-2 border-[#e87d0e] px-4 text-sm text-[#e87d0e] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#e87d0e] transition-all ease-in-out duration-300 hover:border-[#e87d0e]"
              placeholder="Tell Us Something..."
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <CustomButton text="SEND" className="w-[195px] h-[53px] rounded-[40px]" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
