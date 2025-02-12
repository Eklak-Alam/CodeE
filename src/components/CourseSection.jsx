import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Course from "./Course";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="w-full py-12 px-5 bg-gray-100">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-gray-800">
      📚 Top Online Courses
      </h2>
      <p className="text-center text-gray-500 mt-2 text-lg">
        Discover our top-rated courses across various categories.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {allCourses.slice(0, 4).map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>

      {/* Show All Courses Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/course-list"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
        >
          Show All Courses →
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
