import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocation } from '../hooks/useLocation';
import { useRestaurants } from '../hooks/useRestaurants';
import '../App.css';

function GamePage() {
  const navigate = useNavigate();
  const { location, locationError, loading: locationLoading, getLocation } = useLocation();
  const { restaurants: restaurantData, error: restaurantsError, loading: restaurantsLoading, fetchRestaurants } = useRestaurants();
  const [cuisines, setCuisines] = useState([]);
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cuisineWeights, setCuisineWeights] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8000/cuisine-questions", {
        params: { cuisines }
      });
      setCurrentQuestions(response.data);
      // Initialize weights for each cuisine
      const initialWeights = {};
      cuisines.forEach(cuisine => {
        initialWeights[cuisine] = 0;
      });
      setCuisineWeights(initialWeights);
      
      setIsLoading(false);
    } catch (error) {
      console.error("Axios error:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (cuisines.length !== 0) {
      setIsLoading(true);
      fetchData();
    }
  }, [cuisines]);

  useEffect(() => {
    if (location && restaurantData.length === 0) {
      fetchRestaurants(location);
    }
  }, [location]);

  useEffect(() => {
    if (restaurantData.length > 0) {
      const allCuisines = restaurantData.flatMap(restaurant => restaurant.cuisines);
      const uniqueCuisines = new Set(allCuisines);
      setCuisines([...uniqueCuisines]);
      const allRestaurants = restaurantData.map(restaurant => restaurant.name);
      setRestaurantNames(allRestaurants);
    }
  }, [restaurantData]);

  const updateCuisineWeights = (answer) => {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(opt => opt.label.toLowerCase() === answer.toLowerCase());
    
    if (selectedOption) {
      setCuisineWeights(prevWeights => {
        const newWeights = { ...prevWeights };
        currentQuestion.relatedCuisines.forEach(cuisine => {
          cuisine = cuisine.toLowerCase();
          if (cuisine in newWeights) {
            //Make it all case insensitive
            newWeights[cuisine] += selectedOption.weight;
          }
        });
        return newWeights;
      });
    }
  };

  const submitResults = async () => {
    try {
      console.log(cuisineWeights)
      // Find cuisine with highest weight
      console.log(cuisineWeights)
      const topCuisine = Object.entries(cuisineWeights)
        .reduce((a, b) => a[1] > b[1] ? a : b)[0];
  
      // Send top cuisine and all restaurants to backend
      const response = await axios.post("http://localhost:8000/submit-result", {
        topCuisine,
        restaurants: restaurantData // Send all restaurant data
      });
  
      // Log matching restaurants
      console.log("Matching Restaurants:", response.data.matchingRestaurants);
  
      // Navigate to results page or handle completion
      navigate('/results', { 
        state: { 
          topCuisine,
          weights: cuisineWeights,
          matchingRestaurants: response.data.matchingRestaurants 
        }
      });
    } catch (error) {
      console.error("Error submitting results:", error);
    }
  };

  const handleAnswerClick = (answer) => {
    updateCuisineWeights(answer);
    console.log(currentQuestions);
    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If this was the last question, submit results
      submitResults();
    }
  };

  function returnHome() {
    navigate('/', { replace: true });
  }

  const showLoadingScreen = isLoading || currentQuestions.length === 0;

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

      {showLoadingScreen ? (
        <div className="loading-screen">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="image-container">
          <img src="map.png" className="centered-image" alt="Map" />
          
          <div className="textbox">{currentQuestions[currentQuestionIndex]?.text}</div>
          <div className="button-container">
            <ButtonGroup vertical>
              <Button className="voyage-button" onClick={() => handleAnswerClick("Yes")}>Yes</Button>
              <Button className="voyage-button" onClick={() => handleAnswerClick("No")}>No</Button>
              <Button className="voyage-button" onClick={() => handleAnswerClick("Probably")}>Probably</Button>
              <Button className="voyage-button" onClick={() => handleAnswerClick("Probably Not")}>Probably Not</Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;