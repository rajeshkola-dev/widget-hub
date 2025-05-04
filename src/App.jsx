import React from "react";
import { Routes, Route } from "react-router-dom";
import CountdownWidget from "./widgets/CountdownWidget";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome Home</div>} />
      <Route
        path="/countdown"
        element={
          <CountdownWidget
            initialDuration={300}
            onComplete={() => alert("Countdown finished!")}
          />
        }
      />
    </Routes>
  );
}
