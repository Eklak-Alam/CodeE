import React, { useContext, useState } from "react";
import { BiSearch, BiCategory } from "react-icons/bi";
import { AppContext } from "../context/AppContext";

const YoutuberList = () => {
  const { allYoutubers } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories dynamically from allYoutubers
  const categories = ["All", ...new Set(allYoutubers.map((youtuber) => youtuber.category))];

  // Filter YouTubers based on search and category
  const filteredYoutubers = allYoutubers.filter(
    (youtuber) =>
      youtuber.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || youtuber.category === category)
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        🎥 Top YouTubers to Follow
      </h1>

      {/* Search & Filter Section */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-1/2 md:w-2/3">
          <input
            type="text"
            placeholder="Search YouTuber..."
            className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <select
            className="px-4 py-2 border md:w-40 border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <BiCategory className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </div>

      {/* YouTuber Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {filteredYoutubers.length > 0 ? (
          filteredYoutubers.map((youtuber, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <img src={youtuber.img} alt={youtuber.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{youtuber.name}</h2>
              <p className="text-sm text-gray-500">{youtuber.category} Content</p>
              <a
                href={youtuber.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Visit Profile →
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No YouTubers found.</p>
        )}
      </div>
    </div>
  );
};

export default YoutuberList;
