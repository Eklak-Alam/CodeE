import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Search = ({ data }) => {
  const navigate = useNavigate();
  const { allCourses } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState(data ? data : "");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [error, setError] = useState("");

  // Handle Input Change & Filter Results
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredCourses([]);
      setError("");
      return;
    }

    const results = allCourses.filter((course) =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      setFilteredCourses(results);
      setError("");
    } else {
      setFilteredCourses([]);
      setError("No courses found.");
    }
  };

  // Handle Search Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    const matchedCourse = filteredCourses.length > 0 ? filteredCourses[0] : null;

    if (matchedCourse) {
      navigate(`/roadmap/${matchedCourse.id}`);
      setFilteredCourses([]);
      setSearchQuery("");
    } else {
      setError("No courses found.");
    }
  };

  // Handle Click on Suggested Course
  const handleCourseClick = (course) => {
    navigate(`/roadmap/${course.id}`);
    setFilteredCourses([]);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearchSubmit} className="flex items-center bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">
        <FaSearch className="text-2xl text-gray-600 ml-4" />
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-3 pl-4 text-gray-700 outline-none"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-lg p-2 px-5 mr-1 mt-1 mb-1 rounded-xl transition">
          Search
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {filteredCourses.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white text-black rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCourseClick(course)}
            >
              <span className="font-semibold text-blue-600">
                {course.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
