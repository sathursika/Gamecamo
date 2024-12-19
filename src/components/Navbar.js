import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-8 bg-black">
      {/* Logo */}
      <p className="text-[29px] font-bold text-white">Gamecamo{"{"}{"}"}</p>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        <button className="text-white text-3xl">☰</button>
      </div>

      {/* Navigation Links */}
      <div
        className={`lg:flex gap-[88px] absolute lg:static top-16 left-0 w-full bg-black lg:bg-transparent lg:w-auto lg:flex-row lg:items-center transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#e87d0e]" : "text-white hover:text-[#e87d0e]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#e87d0e]" : "text-white hover:text-[#e87d0e]"
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-[#e87d0e]" : "text-white hover:text-[#e87d0e]"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive ? "text-[#e87d0e]" : "text-white hover:text-[#e87d0e]"
          }
        >
          Reviews
        </NavLink>
      </div>

      {/* Contact Us Button */}
      <div className="flex items-center">
        <NavLink to="/contact">
          <CustomButton text="Contact us" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
