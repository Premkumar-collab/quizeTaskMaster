import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Timer from "../components/Timer";
import { animalData } from "../data/animalData";
import { designData } from "../data/designData";
import { musicData } from "../data/musicData";
import { spaceData } from "../data/spaceData";
import { sportsData } from "../data/sportsData";
import { testData } from "../data/testData";
import {
  ArrowBigRight,
  ArrowBigLeft,
  CheckCircle,
  XCircle,
} from "lucide-react";

export const quizData = {
  animals: animalData,
  design: designData,
  music: musicData,
  space: spaceData,
  sports: sportsData,
  gaming: testData,
};

const Game = () => {
  const { categoryId } = useParams();
  const questions = quizData[categoryId];
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);

  // Add safety check for invalid category
  if (!questions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The quiz category "{categoryId}" doesn't exist.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Handler for when timer runs out
  const handleTimeUp = () => {
    navigate(
      `/result?score=${score}&total=${questions.length * 10}&category=${categoryId}&reason=timeout`
    );
  };

  const handleOptionSelect = (option) => {
    if (!answered) {
      setSelectedOption(option);
      const isCorrect = option === questions[currentIndex].answer;

      if (isCorrect) {
        setSuccess(true);
        setScore((prev) => prev + 10);
      } else {
        setError(true);
      }
      setAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSuccess(false);
      setError(false);
      setSelectedOption("");
      setAnswered(false);
    } else {
      // Navigate to results when quiz is complete
      navigate(
        `/result?score=${score}&total=${questions.length * 10}&category=${categoryId}&reason=completed`
      );
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSuccess(false);
      setError(false);
      setSelectedOption("");
      setAnswered(false);
    }
  };

  const getOptionStyle = (option) => {
    let baseStyle =
      "w-full p-4 rounded-xl text-left font-medium transition-all duration-300 transform hover:scale-105 ";

    if (!answered) {
      // Before answering
      if (selectedOption === option) {
        return (
          baseStyle +
          "bg-blue-500 text-white border-2 border-blue-300 shadow-lg"
        );
      }
      return (
        baseStyle +
        "bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md"
      );
    } else {
      // After answering
      if (option === questions[currentIndex].answer) {
        return (
          baseStyle +
          "bg-green-500 text-white border-2 border-green-300 shadow-lg"
        );
      }
      if (selectedOption === option && error) {
        return (
          baseStyle + "bg-red-500 text-white border-2 border-red-300 shadow-lg"
        );
      }
      return (
        baseStyle +
        "bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed"
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 min-h-screen w-screen flex flex-col">
      {/* Header with Timer and Score */}
      <nav className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Timer onTimeUp={handleTimeUp} initialTime={1200} />
          <div className="bg-white bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-white font-bold text-xl">
              Score: <span className="text-yellow-300">{score}</span>
            </span>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white bg-opacity-30 backdrop-blur-sm text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-40 transition-all hover:shadow-lg"
          >
            Quit Quiz
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl">
          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
            {/* Question Header */}
            <div className="flex justify-between items-center mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Question {currentIndex + 1} of {questions.length}
              </span>
              {answered && (
                <div className="flex items-center gap-2">
                  {success ? (
                    <>
                      <CheckCircle className="text-green-500" size={24} />
                      <span className="text-green-600 font-semibold">
                        Correct!
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-500" size={24} />
                      <span className="text-red-600 font-semibold">
                        Incorrect
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Question Text */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              {questions[currentIndex].question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {questions[currentIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  disabled={answered}
                  className={getOptionStyle(option)}
                >
                  <span className="flex items-center gap-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                currentIndex === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-purple-600 hover:bg-purple-50 hover:shadow-lg transform hover:scale-105"
              }`}
            >
              <ArrowBigLeft size={24} />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!answered}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                !answered
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-purple-600 hover:bg-purple-50 hover:shadow-lg transform hover:scale-105"
              }`}
            >
              <span>
                {currentIndex === questions.length - 1 ? "Finish" : "Next"}
              </span>
              <ArrowBigRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;