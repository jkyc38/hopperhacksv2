import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import axios from "axios"
import Results from './components/Results';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/game" element={<GamePage/>}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
    </Router>
  );
}

export default App;
