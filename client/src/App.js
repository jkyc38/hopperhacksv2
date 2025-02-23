import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import axios from "axios";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/cuisine-questions", {
          params: { cuisines: ["Chinese", "Korean", "Japanese"] } // Fix: Array elements separated properly
        });

        console.log(response.data); // ✅ Use response data to avoid the warning
      } catch (error) {
        console.error("Axios error:", error);
      }
    }

    fetchData(); // Call the async function
  }, []); // Empty dependency array means it runs once on mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BigBack" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
