import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css'; // Ensure your CSS file is imported


function Test() {
  const navigate = useNavigate();
  function returnHome() {
    navigate('/', { replace : true});
  }
  return (
    <div className="home-container">
      {/* Static Wave */}
    <div className="wave-static"></div>
    
    <div className="mt-3 ms-4">
      <button className="titleName" onClick={returnHome}>
        Big Back Voyage
      </button>
        
      </div>
    <img src="eyePatch.png" className="wolfie" alt="Map" />
    <div className="image-container">
        <img src="map.png" className="centered-image" alt="Map" />
        
        <div className="textbox">What Do You Want to Eat?</div>
        <div className="button-container">
   
            <ButtonGroup vertical>
                <Button className="voyage-button">Yes</Button>
                <Button className="voyage-button">No</Button>
                <Button className="voyage-button">Probably</Button>
                <Button className="voyage-button">Probably Not</Button>
            </ButtonGroup>
    </div>
    </div>

    



      {/* Waves Background */}
      <img src="greyship.png" className="ship" alt="Ship" />
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      

     
    </div>
  );
}

export default Test;
