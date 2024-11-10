import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">
            Vernier Caliper
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
