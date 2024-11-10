import React from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { UnderConstruction } from "./components/layout/UnderConstruction";
import { NavBar } from "./components/navigation/NavBar";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UnderConstruction />
      <Header />
      <NavBar />

      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;
