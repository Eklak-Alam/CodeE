import React, { useContext } from "react";
import Course from "../components/Course";
import { AppContext } from "../context/AppContext"; // Import the AppContext

const CourseList = () => {
  const { allCourses } = useContext(AppContext); // Get courses from context

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Explore Our <span className="text-orange-600 text-4xl font-bold">Courses</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allCourses && allCourses.length > 0 ? (
          allCourses.map((course) => <Course key={course.id} course={course} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses available.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
