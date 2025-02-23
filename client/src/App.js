import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";
function App() {
return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/BigBack" element={<GamePage></GamePage>} />
      </Routes>
    </Router>
  );
}

export default App;
