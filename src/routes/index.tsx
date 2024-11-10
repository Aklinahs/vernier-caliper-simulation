import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">
      Welcome to Vernier Caliper Simulation
    </h1>
    <p>This is the home page of our simulation.</p>
  </div>
);

const About = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">About</h1>
    <p>Information about this project.</p>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
