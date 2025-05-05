import React from "react";
import { Routes, Route } from "react-router-dom";
import CountdownWidget from "./widgets/CountdownWidget";
import Button from "./widgets/Button";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome Home</div>} />
      <Route
        path="/countdown"
        element={
          <CountdownWidget
            initialDuration={3}
          />
        }
      />
      <Route path="/button" element={<Button />} />
    </Routes>
  );
}
