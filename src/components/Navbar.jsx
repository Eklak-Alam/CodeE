import React, { useState, useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { FaUserCircle, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo4.png";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { allCourses } = useContext(AppContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const results = allCourses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (results.length > 0) {
      setFilteredCourses(results);
      setError("");
    } else {
      setFilteredCourses([]);
      setError("No courses found for your search.");
    }
  };

  const handleCourseClick = () => {
    setFilteredCourses([]);
    setSearchQuery("");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-5 py-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold flex items-center">
          <img src={Logo} className="w-20 h-22" alt="Logo" />
        </div>

        {/* Middle: Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-grow justify-center relative">
          <div className="relative w-3/5 flex">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-12 py-2 rounded-md text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
              Search
            </button>
          </div>
          {filteredCourses.length > 0 && (
            <div className="absolute top-14 bg-white text-black w-3/5 rounded-md shadow-lg p-2 max-h-40 overflow-y-auto">
              {filteredCourses.map((course, index) => (
                <Link
                  key={index}
                  to={`/roadmap/${course.id}`}
                  className="p-2 block hover:bg-gray-200 cursor-pointer"
                  onClick={handleCourseClick}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          )}
          {error && <p className="absolute top-14 bg-red-500 text-white p-2 w-3/5 rounded-md">{error}</p>}
        </form>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link>
          <Link to="/course-list" className="hover:text-blue-400 transition duration-300">Courses</Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>

          {user ? (
            <div className="flex items-center gap-2 bg-blue-600 rounded-xl px-3 py-2 ml-4">
              <span>{user.fullName}</span>
              <UserButton />
            </div>
          ) : (
            <button onClick={openSignIn} className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              <FaUserCircle size={20} />
              <span>Create Account</span>
            </button>
          )}
        </div>

        {/* Mobile View - Profile & Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {user && <UserButton />} {/* Show user profile icon */}
          <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`text-white fixed inset-0 bg-black bg-opacity-80 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-start p-6 w-3/4 h-full z-50`}
      >
        <FaTimes size={28} className="self-end mb-4 cursor-pointer" onClick={() => setMenuOpen(false)} />

        <Link to="/" className="py-2 text-lg hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="py-2 text-lg hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/course-list" className="py-2 text-lg hover:text-blue-400" onClick={() => setMenuOpen(false)}>Courses</Link>
        <Link to="/contact" className="py-2 text-lg hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link>

        <div className="mt-6">
          {user ? (
            <div className="flex items-center gap-2">
              <UserButton />
              <span>{user.fullName}</span>
            </div>
          ) : (
            <button onClick={openSignIn} className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              <FaUserCircle size={20} />
              <span>Create Account</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
