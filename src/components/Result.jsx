import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Trophy, Clock, Home, RotateCcw } from "lucide-react";

const Result = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get the values from URL parameters
  const score = searchParams.get("score");
  const total = searchParams.get("total");
  const category = searchParams.get("category") || "quiz";
  const reason = searchParams.get("reason") || "completed";

  // Convert strings to numbers
  const scoreNum = parseInt(score) || 0;
  const totalNum = parseInt(total) || 0;

  // Calculate percentage
  const percentage =
    totalNum > 0 ? Math.round((scoreNum / totalNum) * 100) : 0;

  // Get message based on reason
  const getCompletionMessage = () => {
    if (reason === "timeout") {
      return {
        title: "Time's Up! ⏰",
        subtitle: "The quiz timer has expired",
        icon: <Clock size={64} className="text-orange-500 mx-auto mb-4" />,
      };
    }
    return {
      title: "Quiz Complete! 🎉",
      subtitle: "You finished all questions",
      icon: <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />,
    };
  };

  const completionInfo = getCompletionMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        {completionInfo.icon}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {completionInfo.title}
        </h1>
        <p className="text-gray-600 mb-6">{completionInfo.subtitle}</p>

        {/* Category Badge */}
        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 capitalize">
          {category} Quiz
        </div>

        {/* Score Display */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-purple-600 mb-2">
            {scoreNum}/{totalNum}
          </div>
          <div className="text-2xl text-gray-600">{percentage}%</div>
        </div>

        {/* Performance Message */}
        <p className="text-lg text-gray-700 mb-8 p-4 bg-gray-50 rounded-xl">
          {percentage >= 80
            ? "🌟 Excellent work! Outstanding performance!"
            : percentage >= 60
            ? "👍 Good job! You're doing great!"
            : percentage >= 40
            ? "💪 Not bad! Keep practicing and you'll improve!"
            : "📚 Keep trying! Practice makes perfect!"}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate(`/game/${category}`)}
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105"
          >
            <RotateCcw size={20} />
            <span>Try Again</span>
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
          >
            <Home size={20} />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;