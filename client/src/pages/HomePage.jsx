import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'; // Ensure your CSS file is imported
import AnimatedGif from "../components/treasureChest";

function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const handleSetSailClick = () => {
    setIsStarted(!isStarted);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // This will make the chest visible after a certain time
    }, 1500); // 2000ms, adjust this based on your animation timing

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [isStarted]);

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
          
          {/* <Button onClick={handleSetSailClick}>Hello</Button> */}
          {/* Render animation and island image after button click */}
          {isStarted && (
            <>  
                  <img src = 'scroll.png' className = "scroll"></img>
                  <div className="right-side-container">
                  {isVisible && <img src="island.png" alt="Island" className="island-image" />}
             
                  <div className={`chest-container ${isVisible ? 'show' : ''}`}></div>
                </div>

            </>
          )}

       

      </div>
    </div>
  );
}

export default Home;
