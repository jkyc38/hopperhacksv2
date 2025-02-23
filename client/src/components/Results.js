import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { topCuisine, weights, matchingRestaurants } = location.state || {};

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

      <div className="results-container">
        <h2>Your Food Adventure Awaits!</h2>
        <p>Based on your preferences, we recommend trying {topCuisine} cuisine.</p>
        
        {matchingRestaurants && matchingRestaurants.length > 0 ? (
          <>
            <h3>Recommended Restaurants:</h3>
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
  );
}

export default Results;