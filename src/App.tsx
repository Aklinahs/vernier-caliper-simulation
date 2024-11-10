import React from "react";
import { AppRoutes } from "./routes";
import { NavBar } from "./components/navigation/NavBar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Under Construction Banner */}
      <div className="bg-yellow-100 p-2 text-center">
        🚧 This project is under construction
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <AppRoutes />
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center mt-8">
        <p>© 2024 Vernier Caliper Simulation</p>
      </footer>
    </div>
  );
};

export default App;
