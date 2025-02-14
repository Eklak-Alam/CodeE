import React from "react";
import { FaLaptopCode, FaRocket, FaUsers, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-container bg-gray-950 text-white p-8 min-h-screen flex flex-col items-center pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading Section */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-blue-400"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About CodeE
      </motion.h1>

      {/* Introduction */}
      <motion.p
        className="text-lg text-center max-w-2xl mb-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        CodeE is an advanced platform designed for developers to explore, learn,
        and build amazing projects. We provide high-quality coding resources,
        project ideas, and real-world examples to boost your coding journey!
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {[
          {
            icon: <FaLaptopCode size={40} />,
            title: "Modern UI/UX",
            desc: "Designed with Tailwind CSS for a clean and professional look.",
          },
          {
            icon: <FaRocket size={40} />,
            title: "Performance",
            desc: "Optimized for speed with lazy loading and animations.",
          },
          {
            icon: <FaUsers size={40} />,
            title: "Community Support",
            desc: "Join thousands of developers sharing and collaborating.",
          },
          {
            icon: <FaTools size={40} />,
            title: "Developer Friendly",
            desc: "Built with React, Framer Motion, and best practices.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="text-blue-400 mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Technologies Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          Technologies Used
        </h2>
        <p className="text-lg text-gray-300">
          CodeE is built using modern technologies like React, Tailwind CSS,
          Framer Motion, and more!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
