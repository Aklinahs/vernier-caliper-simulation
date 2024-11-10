// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Change this from BrowserRouter
import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      {" "}
      {/* Change this from BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
