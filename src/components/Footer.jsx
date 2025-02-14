import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo & Project Name */}
          <div>
            <h2 className="text-3xl font-bold">CODE <span className="text-orange-600">E</span></h2>
            <p className="text-gray-400 mt-2">
              Build the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/course-list" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link target="_blank" to="https://www.linkedin.com/in/eklak-alam-40ba632b5/" className="text-gray-400 hover:text-blue-500"><FaLinkedin size={24} /></Link>
              <Link target="_blank" to="https://github.com/Eklak-Alam" className="text-gray-400 hover:text-gray-500"><FaGithub size={24} /></Link>
              <Link target="_blank" to="https://www.instagram.com/heartless_eklak/" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></Link>
              <Link target="_blank" to="https://www.youtube.com/@eklakalam04" className="text-gray-400 hover:text-red-700"><FaYoutube size={24} /></Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} MyProject. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
