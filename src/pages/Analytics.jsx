import React from "react";
import { Home, List, BarChart3, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {userData} from '../data/userData'

const Analytics = () => {
  const sortedUser = [...userData].sort((a,b)=>b.points - a.points);
  const topThree = sortedUser.slice(0,3);
  const restUsers = sortedUser.slice(3);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex flex-col lg:flex-row gap-6 p-6 min-h-screen">
        {/* Left Navigation */}
        <div className="lg:w-64 bg-white rounded-xl shadow-sm p-4 
              order-last lg:order-first
              fixed bottom-0 left-0 right-0 lg:static
              lg:rounded-xl rounded-t-xl
              z-50 ">
          <nav className="flex flex-row lg:flex-col justify-around lg:justify-start space-x-0 lg:space-x-0 lg:space-y-4">
            <Link to="/dashboard" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <Home className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Home</span>
            </Link>

            <Link to="/dashboard" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <List className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Categories</span>
            </Link>

            <Link to="/analytics" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg bg-blue-50 text-blue-600 transition-all duration-200">
              <BarChart3 className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Analytics</span>
            </Link>

            <Link to="/user" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <User className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">User</span>
            </Link>
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 pb-24 lg:pb-0">
          <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Leaderboard
            </h2>
            
            {/* Week Selector */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <ChevronLeft className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" size={20} />
              <h4 className="text-lg font-medium text-gray-700">This week</h4>
              <ChevronRight className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" size={20} />
            </div>

            {/* Top Three Users - Podium Style */}
            <div className="flex justify-center items-end gap-6 mb-12 px-4">
              {/* Second Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-1">
                    <img 
                      src={topThree[1]?.image} 
                      alt={topThree[1]?.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-white font-bold text-sm shadow-md">
                    #2
                  </div>
                </div>
                <strong className="text-base font-semibold text-gray-800">{topThree[1]?.name}</strong>
                <p className="text-gray-600 font-medium text-sm">{topThree[1]?.points} points</p>
              </div>

              {/* First Place */}
              <div className="flex flex-col items-center -mt-6">
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                    <img 
                      src={topThree[0]?.image} 
                      alt={topThree[0]?.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center bg-gray-900 text-white font-bold shadow-lg">
                    #1
                  </div>
                  <div className="absolute -bottom-1 right-1 w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <strong className="text-lg font-bold text-gray-900">{topThree[0]?.name}</strong>
                <p className="text-blue-600 font-bold text-sm">{topThree[0]?.points} points</p>
              </div>

              {/* Third Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-1">
                    <img 
                      src={topThree[2]?.image} 
                      alt={topThree[2]?.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-white font-bold text-sm shadow-md">
                    #3
                  </div>
                </div>
                <strong className="text-base font-semibold text-gray-800">{topThree[2]?.name}</strong>
                <p className="text-gray-600 font-medium text-sm">{topThree[2]?.points} points</p>
              </div>
            </div>

            {/* Rest of Users */}
            <div className="space-y-3">
              {restUsers.map((user, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 ${
                    user.name === "You" ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-900 w-8">#{index + 4}</span>
                    <div className={`w-12 h-12 rounded-full p-0.5 ${
                      index === 0 ? 'bg-gradient-to-br from-pink-400 to-pink-500' :
                      index === 1 ? 'bg-gradient-to-br from-cyan-400 to-cyan-500' :
                      index === 2 ? 'bg-gradient-to-br from-gray-700 to-gray-800' :
                      'bg-gradient-to-br from-amber-400 to-orange-500'
                    }`}>
                      <img 
                        src={user.image} 
                        alt={user.name} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg ${
                      index === 1 || index === 2 ? 'text-green-500' : 'text-red-400'
                    }`}>
                      {index === 1 || index === 2 ? '↑' : '↓'}
                    </span>
                    <span className="font-semibold text-gray-700">{user.points} points</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;