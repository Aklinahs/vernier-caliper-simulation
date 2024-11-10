import React from "react";
import { Routes, Route } from "react-router-dom";
import { CaliperView } from "./CaliperView";
import { About } from "./about";
import { Settings } from "./settings";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CaliperView />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
