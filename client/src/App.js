import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Test from "./pages/TestPage";
import axios from "axios"

function App() {
  const [cuisineScore, setCuisineScore] = useState(0)
  useEffect(() => {
    //make it so after the user confirms their location we parse the nearby restaurants cuisines
    //subsequently call the fetchdata function with the cuisines that we got from the restaurants
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/cuisine-questions", {
          params: { cuisines: ["Chinese", "Korean", "Japanese", "Indian"] } // Fix: Array elements separated properly
        });

        console.log(response.data); // ✅ Use response data to avoid the warning
      } catch (error) {
        console.error("Axios error:", error);
      }
    }

    fetchData(); // Call the async function
  }, []); // Empty dependency array means it runs once on mount

  // async function sendCuisineScores(scores){
  //   const scoreData = {
  //     "Chinese": 4,
  //     "Korean":2.1,
  //     "Japanese": 3
  //   }
  //   const ENDPOINT = "ENDPOINT";
  //   const res = axios.get(ENDPOINT, {
  //     params: scoreData
  //   });
    
  // }
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
