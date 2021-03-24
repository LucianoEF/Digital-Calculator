import React from "react";
import Calculator from "./containers/calculator";
import "./app.css";

export function App() {
  return (
    <div className="screen">
      <div className="divSuperior"></div>
      <Calculator />
      <div className="divInferior"></div>
    </div>
  );
}
