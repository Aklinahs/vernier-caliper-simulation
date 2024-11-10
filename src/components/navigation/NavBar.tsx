import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Vernier Caliper</span>
          </Link>
          <div className="flex items-center">
            <Link to="/about" className="px-3 py-2">
              About
            </Link>
            <Link to="/settings" className="px-3 py-2">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
