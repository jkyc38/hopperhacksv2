import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'; // Ensure your CSS file is imported
import { useNavigate } from "react-router-dom"; // Import the navigate hook
import AnimatedGif from "../components/treasureChest";

function Home() {

  const [isSailing, setIsSailing] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSetSailClick = () => {
    setIsSailing(true); // Start animation
    setTimeout(() => {
      setIsSailing(false); // Reset animation after some time
      navigate("/game");
    }, 4000); // Match this duration to your animation time
  };



  return (
    <div className="home-container">
      {/* Static Wave */}
      <div className="wave-static"></div>
      
      
      {/* Waves Background */}

      <img src="greyship.png" className={isSailing ? "shipmoving" : "ship"} alt="Ship" />
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      
     
     
      {/* Content of the homepage */}
      <div className="container text-center mt-5">
        
          <h1>Big Back Voyage</h1>
          
          <Button className="set-sail" onClick={handleSetSailClick}>Set Sail</Button>
          

      </div>
    </div>
  );
}

export default Home;
