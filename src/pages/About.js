import React from 'react';
import Image from '../assets/Rectangle 26.png';
import CustomButton from '../components/CustomButton'; // Reusable button component

const About = () => {
  return (
    <section className="w-full h-auto py-10 bg-black" style={{ marginTop: '70px' }}>
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-4">
        {/* Image Section */}
        <img
          src={Image}
          alt="Joystick"
          className="w-full max-w-[496px] h-auto rounded-[20px] mb-10 md:mb-0 md:mr-10"
        />

        {/* Text Content */}
        <div className="w-full md:w-[536px] text-white">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-medium leading-tight">
              <span className="text-[#dc7000]">About Us</span>
              <br />
              <span>Powered by ProDesigner</span>
            </h2>
          </header>

          <p className="text-base sm:text-lg mb-6">
            At ProDesigner, we specialize in designing and delivering top-quality gaming environments. From visually stunning graphics to seamless gameplay, every detail we create is driven by passion and innovation. Our mission is to bring exciting, dynamic worlds to life, ensuring unforgettable adventures for players everywhere.
          </p>
          
          <p className="text-base sm:text-lg mb-6">
            To revolutionize gaming with creativity, precision, and unmatched design expertise.
          </p>

          {/* Read More Button */}
          <CustomButton text="Read More" className="w-[177px] h-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default About;
