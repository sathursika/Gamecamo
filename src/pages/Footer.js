import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#070707] text-white py-10 px-5">
      {/* Footer Content Wrapper */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e87d0e]">About Us</h3>
          <p className="mb-4 text-sm sm:text-base">
            To revolutionize gaming with creativity, precision, and unmatched design expertise.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e87d0e]">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-gray-400 text-sm sm:text-base">F.A.Q</a></li>
            <li><a href="/sitemap" className="hover:text-gray-400 text-sm sm:text-base">Sitemap</a></li>
            <li><a href="/conditions" className="hover:text-gray-400 text-sm sm:text-base">Conditions</a></li>
            <li><a href="/licenses" className="hover:text-gray-400 text-sm sm:text-base">Licenses</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e87d0e]">Contact Us</h3>
          <p className="mb-4 text-sm sm:text-base">Feel free to reach out for any inquiries or support. We are here to help!</p>
          <ul className="space-y-2">
            <li><a href="tel:+1234567890" className="hover:text-gray-400 text-sm sm:text-base">Phone: +123 456 7890</a></li>
            <li><a href="mailto:info@example.com" className="hover:text-gray-400 text-sm sm:text-base">Email: info@example.com</a></li>
            <li><a href="/contact" className="hover:text-gray-400 text-sm sm:text-base">Contact Form</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e87d0e]">Socialize with Gamecamo</h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/Gamecamo" aria-label="Facebook" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/Gamecamo" aria-label="Twitter" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/Gamecamo" aria-label="Instagram" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/Gamecamo" aria-label="LinkedIn" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section (optional) */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Gamecamo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
