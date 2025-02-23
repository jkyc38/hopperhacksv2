import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'; // Ensure your CSS file is imported


function Home() {
  return (
    <div className="home-container">
      {/* Static Wave */}
      <div className="wave-static"></div>
      
      {/* Waves Background */}

      <img src="greyship.png" className="ship" alt="Ship" />
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      

     
      {/* Content of the homepage */}
      <div className="container text-center mt-5">
        <h1>Big Back Voyage</h1>
        <Link to="/BigBack">
          <Button className="set-sail">Set Sail</Button>
        </Link>
         {/* Ship Image */}
       

      </div>
    </div>
  );
}

export default Home;
