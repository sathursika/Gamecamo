import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaHeart, FaBell, FaSearch, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
  return (
    <div className="w-8 h-[704px]">
      <div className="flex flex-col justify-start items-center absolute left-10 top-[80px] gap-[54px]">
        
        <a href="/home" className="group">
          <FaHome size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/profile" className="group">
          <FaUser size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/settings" className="group">
          <FaCog size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/logout" className="group">
          <FaSignOutAlt size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/favorites" className="group">
          <FaHeart size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/notifications" className="group">
          <FaBell size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/search" className="group">
          <FaSearch size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        <a href="/messages" className="group">
          <FaEnvelope size={22} className="text-white group-hover:text-[#e87d0e]" />
        </a>
        
      </div>
    </div>
  );
};

export default Sidebar;
