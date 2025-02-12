import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo & Project Name */}
          <div>
            <h2 className="text-3xl font-bold">🚀 MyProject</h2>
            <p className="text-gray-400 mt-2">
              Build the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/course-list" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/" className="text-gray-400 hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="/" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="/" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="/" className="text-gray-400 hover:text-blue-600"><FaLinkedin size={24} /></a>
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
