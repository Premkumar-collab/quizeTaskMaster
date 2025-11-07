import React from "react";
import { FileText, CircleUser, UserRoundCheck, Home, List, BarChart3, User, Twitter, Facebook, Instagram, Youtube, Heart, Users, Briefcase, Mail, Monitor, MapPin, Camera, Edit3, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
const Profile = () => {
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

            <Link to="/analytics" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg transition-all duration-200">
              <BarChart3 className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">Analytics</span>
            </Link>

            <Link to="/user" className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg bg-blue-50 text-blue-600  hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <User className="text-2xl lg:text-xl" size={20} />
              <span className="font-medium text-xs lg:text-base">User</span>
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex-1 mb-20 lg:mb-0">
          {/* Header */}
          <div className="bg-white shadow-md p-6 rounded-xl mb-6 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-800">User Profile</h3>
            <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-colors">
              User Profile
            </button>
          </div>

          {/* Profile Card with Cover */}
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
            {/* Cover Image - Purple gradient like the reference */}
            <div className="h-48 bg-gradient-to-br from-indigo-300 via-purple-300 to-purple-400 relative">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,100 Q200,150 400,100 T800,100 L800,200 L0,200 Z" fill="rgba(99, 102, 241, 0.3)"/>
                  <circle cx="100" cy="80" r="60" fill="rgba(139, 92, 246, 0.2)"/>
                  <circle cx="700" cy="120" r="80" fill="rgba(167, 139, 250, 0.2)"/>
                </svg>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="bg-white px-6 pb-6 pt-0">
              {/* Profile Image */}
              <div className="flex justify-center -mt-16 mb-4">
                <div className="relative">
                  <div className="rounded-full bg-gradient-to-br from-blue-400 to-purple-500 w-32 h-32 border-4 border-white shadow-lg flex items-center justify-center text-white text-4xl font-bold">
                    RK
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Redz King</h2>
                <p className="text-gray-500 text-sm">Web Developer</p>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-12 mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <FileText className="text-gray-600" size={20} />
                  </div>
                  <strong className="block text-lg font-bold text-gray-800">938</strong>
                  <p className="text-xs text-gray-500">Designs</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <UserRoundCheck className="text-gray-600" size={20} />
                  </div>
                  <strong className="block text-lg font-bold text-gray-800">3,586</strong>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <CircleUser className="text-gray-600" size={20} />
                  </div>
                  <strong className="block text-lg font-bold text-gray-800">2,659</strong>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-3 flex-wrap">
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube size={18} />
                </button>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-md ml-2">
                  Add to Story
                </button>
              </div>

              {/* Profile Tabs */}
              <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-gray-100 bg-indigo-50 -mx-6 px-6 py-4 rounded-b-xl">
                <button className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                  <User size={18} />
                  <span className="text-sm">Profile</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 font-medium hover:text-indigo-600 transition-colors">
                  <Heart size={18} />
                  <span className="text-sm">Followers</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 font-medium hover:text-indigo-600 transition-colors">
                  <Users size={18} />
                  <span className="text-sm">Friends</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 font-medium hover:text-indigo-600 transition-colors">
                  <Monitor size={18} />
                  <span className="text-sm">Gallery</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Introduction Card */}
            <div className="bg-white shadow-md rounded-xl p-6 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Introduction</h3>
              <p className="text-gray-600 text-sm mb-6">
                Hello, I am Redz King. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Briefcase className="text-gray-500" size={18} />
                  <span className="text-sm">Bangalore University</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="text-gray-500" size={18} />
                  <span className="text-sm break-all">codewithredz@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Monitor className="text-gray-500" size={18} />
                  <span className="text-sm">www.codewithredz.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-gray-500" size={18} />
                  <span className="text-sm">Bangalore - 560110</span>
                </div>
              </div>
            </div>

            {/* Post Creation and Feed Card */}
            <div className="bg-white shadow-md rounded-xl p-6 lg:col-span-2 space-y-6">
              {/* Post Creation */}
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="Share your thoughts"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                      <Camera size={16} />
                      Photo / Video
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
                      <Edit3 size={16} />
                      Article
                    </button>
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                    Post
                  </button>
                </div>
              </div>

              {/* Sample Post */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      RK
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Redz King</h4>
                      <p className="text-xs text-gray-500">3 mins ago</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit aspernatur dolorem maxime dolor eos facilis vel id incidunt quae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;