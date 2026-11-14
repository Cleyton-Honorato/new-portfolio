import React from "react";
import ReactDOM from "react-dom/client";
// Global tokens/base must load before component styles so components can override them.
import "./styles/global.css";
import "./components/motion/motion.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
