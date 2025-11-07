import React from "react";
import { Home, List, BarChart3, User } from "lucide-react";
import { Link } from "react-router-dom";

import gaming from "../assets/game.png";
import animals from "../assets/animals.png";
import cup from "../assets/cup.png";
import coin from "../assets/coin.png";
import pen from "../assets/pen.png";
import headphone from "../assets/headphone.png";
import space from "../assets/rocket.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* CHANGE 1: Added min-h-screen and background color for full page layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6">
        {/* CHANGE 2: Changed from grid-cols-2 to grid-cols-1 lg:grid-cols-5 for responsive layout */}
        {/* CHANGE 3: Added gap-6 and p-6 for spacing */}

        {/* LEFT SIDEBAR */}
        {/* LEFT SIDEBAR / BOTTOM NAVIGATION */}
        <div className="lg:w-64 bg-white rounded-xl shadow-sm p-4 
              order-last lg:order-first
              fixed bottom-0 left-0 right-0 lg:static
              lg:rounded-xl rounded-t-xl
              z-50 ">
          <nav className="flex flex-row lg:flex-col justify-around lg:justify-start space-x-0 lg:space-x-0 lg:space-y-4">
            <Link to="/dashboard" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <Home className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Home</span>
            </Link>

            <a href="/dashboard#categories" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <List className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Categories</span>
            </a>

            <Link to="/analytics" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg  transition-all duration-200">
              <BarChart3 className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Analytics</span>
            </Link>

            <Link to="/user" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <User className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">User</span>
            </Link>
          </nav>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="lg:col-span-4 space-y-6 pb-22 lg:pb-0">
          {/* CHANGE 9: Changed to lg:col-span-4 to take remaining space */}
          {/* CHANGE 10: Added space-y-6 for vertical spacing between sections */}

          {/* WELCOME SECTION */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            {/* CHANGE 11: Added card styling with bg-white, rounded-xl, shadow-sm, p-6 */}

            <h4 className="text-gray-600 text-sm mb-1">
              {/* CHANGE 12: Added proper text styling and margin */}
              Welcome back,
              <span className="text-blue-600 font-semibold ml-1">Eva</span>
              {/* CHANGE 13: Changed <p> to <span> for inline display with styling */}
            </h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Let's play!
            </h2>
            {/* CHANGE 14: Added proper heading styles with size, weight, color and margin */}
          </div>

          {/* STREAK CARD */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            {/* CHANGE 15: Changed from bg-[var(--primary-color)] to gradient */}
            {/* CHANGE 16: Removed max-h-30 constraint, added proper padding and styling */}

            <div className="flex items-center justify-between">
              {/* CHANGE 17: Changed from min-h-full to items-center and added justify-between */}

              <div className="flex-1">
                {/* CHANGE 18: Added flex-1 to take available space */}
                <h3 className="text-2xl font-bold mb-2">3 days strike!</h3>
                {/* CHANGE 19: Added proper heading styles */}
                <p className="text-blue-100 text-sm">+10 daily points</p>
                {/* CHANGE 20: Added text color and size styling */}
              </div>

              <div className="w-24 h-24 shrink-0 ">
                {/* CHANGE 21: Changed from h-full w-full to fixed size with flex-shrink-0 */}
                <img
                  src={coin}
                  alt="coin-img"
                  className="object-contain h-full w-full drop-shadow-lg "
                />
                {/* CHANGE 22: Added drop-shadow-lg for better visual effect */}
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-4 bg-white bg-opacity-30 rounded-full h-2 overflow-hidden">
              {/* CHANGE 23: Added actual progress bar implementation */}
              <div className="bg-white h-full w-3/5 rounded-full"></div>
            </div>
          </div>

          {/* CATEGORIES SECTION */}
          <div className="bg-white rounded-xl shadow-sm p-6" id="categories">
            {/* CHANGE 24: Added card wrapper for categories */}

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Categories
            </h2>
            {/* CHANGE 25: Added proper heading styles with margin */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* CHANGE 26: Added gap-6 for spacing between category cards */}

              <Link to="gaming" className="group">
                {/* CHANGE 27: Wrapped in Link and added group for hover effects */}
                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* CHANGE 28: Added card styling with hover effects */}
                  <img
                    src={gaming}
                    alt="gaming-img"
                    className="w-full h-40 lg:h-80 object-cover"
                  />
                  {/* CHANGE 29: Added fixed height and full width */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    {/* CHANGE 30: Added overlay with gradient for better text visibility */}
                    <strong className="text-white text-lg">Gaming</strong>
                    {/* CHANGE 31: Styled text with white color and size */}
                  </div>
                </div>
              </Link>

              <Link to="music" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={headphone}
                    alt="headphone-img"
                    className="w-full h-40 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <strong className="text-white text-lg">Music</strong>
                  </div>
                </div>
              </Link>

              <Link to="animals" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={animals}
                    alt="animals-img"
                    className="w-full h-40 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <strong className="text-white text-lg">Animals</strong>
                  </div>
                </div>
              </Link>

              <Link to="design" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={pen}
                    alt="pen-img"
                    className="w-full h-40 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <strong className="text-white text-lg">Design</strong>
                  </div>
                </div>
              </Link>

              <Link to="sports" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={cup}
                    alt="cup-img"
                    className="w-full h-40 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <strong className="text-white text-lg">Sports</strong>
                  </div>
                </div>
              </Link>

              <Link to="space" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={space}
                    alt="space-img"
                    className="w-full h-40 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <strong className="text-white text-lg">Space</strong>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
