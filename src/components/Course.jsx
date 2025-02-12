import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {

  const navigate = useNavigate();
  
  return (
    <div className="relative bg-gradient-to-b from-gray-100 to-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:scale-[1.03] hover:shadow-2xl">
      <div className="relative">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
          <h3 className="text-lg font-bold text-white">{course.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-sm text-start line-clamp-3">{course.description}</p>
        <div className="flex justify-between items-center mt-5">
          <button
           onClick={() => navigate(`/roadmap/${course.id}`)}
           className="bg-blue-900 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all">
            View Roadmap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
