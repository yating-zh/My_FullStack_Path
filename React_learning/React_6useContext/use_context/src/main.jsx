import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h2>1---App() simple example to use Contex</h2>
    <App />
    <h2>2---App2() spearate Context into its own file</h2>
    <App2 />
  </StrictMode>
);
