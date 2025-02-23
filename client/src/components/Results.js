import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { topCuisine, weights, matchingRestaurants } = location.state || {};

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // This will make the chest visible after a certain time
    }, 1500); // 2000ms, adjust this based on your animation timing

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {
    // Log the matching restaurants when component mounts
    if (matchingRestaurants) {
      console.log("Matching Restaurants:", matchingRestaurants);
    }
  }, [matchingRestaurants]);

  function returnHome() {
    navigate('/', { replace: true });
  }

  return (
    <div className="home-container">
      <div className="wave-static"></div>
      
      <div className="mt-3 ms-4">
        <button className="titleName" onClick={returnHome}>
          Big Back Voyage
        </button>
      </div>

      <img src="greyship.png" className="ship" alt="Ship" />
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

       
          
        <img className="wolfie" src = "yay.PNG"></img>
        <div className = "scroll-container">
          <img src = 'scroll.png' className = "scroll"></img>

          <div className = "scroll-results">
          <h2>Your Food Adventure Awaits!</h2>
            <p>Based on your preferences, we recommend trying {topCuisine} cuisine.</p>
            
            {matchingRestaurants && matchingRestaurants.length > 0 ? (
              <>
                <h4>Recommended Restaurants:</h4>
                <ul className="restaurant-list">
                  {matchingRestaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant.name}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No matching restaurants found.</p>
            )}
          </div>
            
         
        </div>
        <div className="right-side-container">
        {isVisible && <img src="island.png" alt="Island" className="island-image" />}
        <div className={`chest-container ${isVisible ? 'show' : ''}`}></div>
        </div>
      

      
    </div>
  );
}

export default Results;