import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { categoryData } from "../data/categoryData";
import { IoArrowBack } from "react-icons/io5";
import { FaPlay, FaCheck } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const category = categoryData[categoryId];
  const navigate = useNavigate();

  // If category doesn't exist, show error
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The category you're looking for doesn't exist.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            <IoArrowBack /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handlePlayClick = () => {
    navigate(`/game/${categoryId}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all"
          >
            <IoArrowBack className="text-xl" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div
          className={`bg-gradient-to-r ${category.color} rounded-2xl shadow-xl overflow-hidden mb-8`}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-6">
                {category.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm text-white/80">Questions</div>
                  <div className="text-2xl font-bold">
                    {category.totalQuestions}
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm text-white/80">Difficulty</div>
                  <div className="text-2xl font-bold">
                    {category.difficulty}
                  </div>
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={handlePlayClick}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                <FaPlay /> Start Playing
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MdQuiz className="text-blue-600" />
                About This Category
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {category.longDescription}
              </p>
            </div>

            {/* Topics Covered */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Topics Covered
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all"
                  >
                    <FaCheck className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fun Fact */}
            <div
              className={`bg-gradient-to-br ${category.color} rounded-xl shadow-lg p-6 text-white`}
            >
              <h3 className="text-xl font-bold mb-3">💡 Fun Fact</h3>
              <p className="text-white/90 leading-relaxed">
                {category.funFact}
              </p>
            </div>

            {/* Quick Start */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Ready to Start?
              </h3>
              <p className="text-gray-600 mb-4">
                Jump right in and test your knowledge! Answer questions, earn
                points, and climb the leaderboard.
              </p>
              <button
                onClick={handlePlayClick}
                className={`w-full bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md`}
              >
                <FaPlay /> Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
