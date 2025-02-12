import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import VideoCard from "../components/VideoCard";

const RoadmapPage = () => {
  const { id } = useParams();
  const { allCourses } = useContext(AppContext); 

  const course = allCourses.find((c) => c.id === id);

  const [selectedStep, setSelectedStep] = useState(null);

  if (!course) {
    return <h2 className="text-center text-2xl text-red-500">Course not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-7 mb-7 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">{course.name} Roadmap</h1>

      <div className="space-y-6">
        {course.roadmap.map((step, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <button
              className="w-full text-left text-xl font-semibold text-gray-800"
              onClick={() => setSelectedStep(selectedStep === index ? null : index)}
            >
              {step.name}
            </button>
            {selectedStep === index && (
              <div className="mt-3">
                <p className="text-gray-600">{step.description}</p>
                <VideoCard videos={step.videos} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
