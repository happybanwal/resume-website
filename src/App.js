
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ViewImage from './Screen/Images';
import Home from './Screen/Home';
import Detail from './Screen/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Detail/>} />
        <Route exact path="/img/:id" element={<ViewImage />} />
      </Routes>
    </Router>
  );
}

export default App;
