import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ViewImage from "./Screen/Images";
import Home from "./Screen/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/img/:id" element={<ViewImage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
