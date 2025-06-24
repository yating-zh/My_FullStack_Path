import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseReducerNumber from "./UseReducerNumber.jsx";
import UseReducerObject from "./UseReducerObject.jsx";
import UseReducerObjectComplex from "./UseReducerObjectComplex.jsx";
import UseState from "./UseState.jsx";
import UseReducerPracticeBank from "./UseReducerPracticeBank.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseState />
    <UseReducerNumber />
    <UseReducerObject />
    <UseReducerObjectComplex />
    <UseReducerPracticeBank />
  </StrictMode>
);
