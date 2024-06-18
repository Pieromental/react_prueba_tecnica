import { createRoot } from "react-dom/client";
import  App  from "./App.jsx";
import React from "react";
import "./index.css";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
