import React from "react";
import Image1 from "../assets/Rectangle 15.png";
import Image2 from "../assets/Rectangle 16.png";
import Image3 from "../assets/Rectangle 17.png";
import Image4 from "../assets/Rectangle 18.png";
import Image5 from "../assets/Rectangle 19.png";
import Image6 from "../assets/Rectangle 20.png";

const Projects = () => {
  return (
    <div className="w-full bg-black py-10 mt-[70px]">
      {/* Heading Section */}
      <div className="text-center mb-10 px-4">
        <p className="text-3xl font-bold text-[#e87d0e]">Our Recent Projects</p>
        <p className="text-sm text-white mt-2">
          Explore our latest projects that showcase innovative designs and cutting-edge gaming solutions. Each project reflects our passion for creating immersive and engaging experiences for gamers worldwide.
        </p>
      </div>

      {/* Projects Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Project 1 */}
        <a href="#" className="block hover:scale-105 transition-transform duration-300">
          <img
            src={Image1}
            className="w-full h-[223px] rounded-[20px] object-cover"
            alt="Project 1"
          />
        </a>

        {/* Project 2 */}
        <a href="#" className="block hover:scale-105 transition-transform duration-300">
          <img
            src={Image2}
            className="w-full h-[223px] rounded-[20px] object-cover"
            alt="Project 2"
          />
        </a>

        {/* Project 3 */}
        <a href="#" className="block hover:scale-105 transition-transform duration-300">
          <img
            src={Image3}
            className="w-full h-[223px] rounded-[20px] object-cover"
            alt="Project 3"
          />
        </a>

        {/* Project 4 */}
        <a href="#" className="block hover:scale-105 transition-transform duration-300">
          <img
            src={Image4}
            className="w-full h-[223px] rounded-[20px] object-cover"
            alt="Project 4"
          />
        </a>

        {/* Project 5 */}
        <a href="#" className="block hover:scale-105 transition-transform duration-300">
          <img
            src={Image5}
            className="w-full h-[223px] rounded-[20px] object-cover"
            alt="Project 5"
          />
        </a>

        {/* Project 6 */}
        <a href="#" className="block hover:scale-105 transition-transform duration-300">
          <img
            src={Image6}
            className="w-full h-[223px] rounded-[20px] object-cover"
            alt="Project 6"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
