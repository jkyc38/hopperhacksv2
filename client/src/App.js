import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Test from "./pages/TestPage";
import axios from "axios"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/game" element={<GamePage/>}/>
        <Route path="/BigBack" element={<Test></Test>} />
      </Routes>
    </Router>
  );
}

export default App;
