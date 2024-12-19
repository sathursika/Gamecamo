import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CustomButton from '../components/CustomButton'; // Import reusable button
import joystickImage from '../assets/Joystick1.png'; // Import the image

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-10 space-y-8 sm:space-y-0 sm:space-x-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center w-full sm:w-[527px] sm:ml-24">
            <p className="text-xl font-bold text-[#e87d0e] mb-4">
              Proved By ProDesigner
            </p>
            <h1 className="text-3xl sm:text-[50px] font-bold text-white mb-4">
              Work that we produce for our clients
            </h1>
            <p className="text-base font-medium text-white mb-8">
              Crafting immersive gaming experiences that captivate players and push the boundaries of creativity.
              <br />
              <br />
              At ProDesigner, we specialize in designing and delivering top-quality gaming environments. From visually stunning graphics to seamless gameplay, every detail we create is driven by passion and innovation.
            </p>

            {/* Button Section */}
            <div className="mt-4">
              <CustomButton text="Get more details" className="w-[195px] h-[53px] rounded-[40px]" />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-[650px] mt-8 sm:mt-0">
            <img
              src={joystickImage}
              className="w-full h-auto object-contain"
              alt="Joystick"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
