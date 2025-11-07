import React from "react";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CategoryDetail from "./components/CategoryDetail";
import Game from "./components/Game";
import Result from "./components/Result";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/dashboard/:categoryId" element={<CategoryDetail />} />
        
        {/* Both routes should exist simultaneously */}
        <Route path="/game/:categoryId" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default App;