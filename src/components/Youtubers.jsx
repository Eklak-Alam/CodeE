import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaYoutube } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Youtubers = () => {
  const navigate = useNavigate();
  const { allYoutubers } = useContext(AppContext);

  return (
    <div className="w-full py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-center text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
        <FaYoutube className="text-red-500 text-2xl sm:text-3xl" />
        <span>Trusted Tech Creators</span>
      </h2>
      <p className="text-center text-gray-400 mt-2 text-sm sm:text-base">
        Explore top YouTube creators to boost your coding skills!
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-10"
      >
        {allYoutubers.slice(0, 6).map(({ name, img, link }, index) => (
          <SwiperSlide key={index}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border border-gray-700"
            >
              <img src={img} alt={name} className="w-32 h-32 rounded-full" />
              <h3 className="text-lg font-semibold mt-4">{name}</h3>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/youtuber-list")}
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-red-500 hover:shadow-lg transform hover:scale-105"
        >
          Show All YouTubers
        </button>
      </div>
    </div>
  );
};

export default Youtubers;
