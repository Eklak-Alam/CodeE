import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <motion.div
      className="contact-container bg-gray-950 text-white p-8 min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-blue-400"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-4">
        {[
          {
            icon: <FaPhone size={40} />,
            title: "Phone",
            desc: "+91 7070691178",
          },
          {
            icon: <FaEnvelope size={40} />,
            title: "Email",
            desc: "eklakalam420@gmail.com",
          },
          {
            icon: <FaMapMarkerAlt size={40} />,
            title: "Location",
            desc: "Chapra, Bihar, India",
          },
        ].map((contact, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="text-blue-400 mb-3">{contact.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
            <p className="text-gray-300">{contact.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="mt-8 flex space-x-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="https://github.com/Eklak-Alam" className="text-blue-400 hover:text-blue-500 transition">
          <FaGithub size={30} />
        </Link>
        <Link href="https://www.youtube.com/@eklakalam04" className="text-blue-400 hover:text-blue-500 transition">
          <FaYoutube size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/eklak-alam-40ba632b5/" className="text-blue-400 hover:text-blue-500 transition">
          <FaLinkedin size={30} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
