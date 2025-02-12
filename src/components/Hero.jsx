import React from "react";
import { Search } from "./Search";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full pt-24 px-5 text-center">
      {/* Hero Heading */}
      <h1 className="font-extrabold text-[18px] text-gray-900 text-lg md:text-4xl max-w-2xl leading-tight">
        Empower Your Future With <span className="text-orange-600 md:text-[36px] font-sans">CodeE</span>
      </h1>
      <h2 className="font-extrabold text-xl md:text-3xl max-w-2xl leading-tight mt-2">
        Courses designed to fit your choice for <span className="text-blue-600">free</span>
      </h2>
      <p className="text-gray-600 text-sm md:text-md mt-3 max-w-lg">
        Learn to code and transform your career. Start your journey today!
      </p>

      {/* Decorative Image */}

      {/* Search Component */}
      <div className="mt-6 w-full max-w-md">
        <Search />
      </div>
    </div>
  );
};

export default Hero;
