import React from "react";

const VideoCard = ({ videos }) => {

  if (!videos || videos.length === 0) {
    return <p className="text-gray-500">No videos available for this step.</p>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-white w-full p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover rounded-md mb-3 transition-transform transform hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={() => window.open(video.url, "_blank")}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
            🎬 Watch Video
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
