import React from "react";
import { Sparkles, Trophy, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from '../assets/right.png'
const Welcome = () => {
  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-7xl items-center">
          {/* Left Section */}
          <div className="space-y-8 text-white flex flex-col justify-center">
            {/* Logo/Brand with animated sparkle */}
            <div className="flex items-center gap-3 animate-fade-in">
              <Sparkles className="w-10 h-10 text-yellow-300 animate-spin-slow" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-white">
                Quizard
              </h1>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Your Quiz Adventure
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                Starts Here
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-100">
                Play, Learn, Share!
              </p>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl animate-fade-in-delay">
              Play engaging quizzes, challenge friends, and earn points for your
              knowledge. Join thousands of quiz enthusiasts today!
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-delay-2">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Earn Rewards</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Users className="w-5 h-5 text-green-300" />
                <span className="text-sm font-semibold">Challenge Friends</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Zap className="w-5 h-5 text-orange-300" />
                <span className="text-sm font-semibold">Level Up</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 animate-fade-in-delay-3">
              <button className="group relative bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Link to={'/dashboard'}> Start Playing</Link>
                  <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 animate-fade-in-delay-4">
              <div>
                <div className="text-3xl font-bold text-yellow-300">10K+</div>
                <div className="text-sm text-white/70">Active Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-300">500+</div>
                <div className="text-sm text-white/70">Quizzes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-300">98%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Section - Image with decorative elements */}
          <div className="relative w-full flex justify-center items-center animate-float">
            {/* Decorative circles behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="w-full max-w-md lg:max-w-lg aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for your image */}
                <div className="text-white text-center p-8">
                  <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="w-32 h-32" />
                  </div>
                  {/* <p className="text-xl font-semibold">
                    Your Quiz Illustration
                  </p> */}
                </div>
                {/* Uncomment and replace with your actual image: */}
                {/* <img 
                  src={img1} 
                  alt="Quizard welcome illustration" 
                  className="w-full h-full object-contain"
                /> */}
               
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce-slow">
                🔥 Trending
              </div>
              <div className="absolute -bottom-4 -left-4 bg-pink-400 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce-slow delay-500">
                ⭐ New Quizzes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
