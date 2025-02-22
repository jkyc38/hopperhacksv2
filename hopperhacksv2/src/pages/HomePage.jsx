import React from "react";
import { Button } from "react-bootstrap";
import '../App.css'; // Ensure your CSS file is imported

function Home() {
  return (
    <div className="home-container">
      {/* Waves Background */}
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* Content of the homepage */}
      <div className="container text-center mt-5">
        <h1>Welcome to the Food Guessing Game</h1>
        <Button variant="primary">Play Game</Button>
      </div>
    </div>
  );
}

export default Home;
