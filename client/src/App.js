import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Test from "./pages/TestPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/BigBack" element={<Test></Test>} />
      </Routes>
    </Router>
  );
}

export default App;
