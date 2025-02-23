import React, { useEffect, useState } from "react";
import { useLocation } from '../hooks/useLocation';
import { useRestaurants } from '../hooks/useRestaurants';
import axios from 'axios';

function GamePage() {
  const { location, locationError, loading: locationLoading, getLocation } = useLocation();
  const { restaurants: restaurantData, error: restaurantsError, loading: restaurantsLoading, fetchRestaurants } = useRestaurants();
  const [cuisines, setCuisines] = useState([]);
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [gameStarted, setGameStarted] = useState(false); // Track if game has started
  
  useEffect(() => {
    getLocation();
  }, []);

  // Function to fetch the questions based on cuisines
  async function fetchData() {
    setIsLoading(true); // Set loading to true when fetching
    try {
      const response = await axios.get("http://localhost:8000/cuisine-questions", {
        params: { cuisines }
      });
      const questions = response.data;
      setCurrentQuestions(questions);
      setIsLoading(false); // Set loading to false when done fetching
    } catch (error) {
      console.error("Axios error:", error);
      setIsLoading(false); // Set loading to false in case of an error
    }
  }

  useEffect(() => {
    if (cuisines.length !== 0) {
      fetchData(); // Fetch data when cuisines are set
    }
  }, [cuisines]);

  useEffect(() => {
    if (location && restaurantData.length === 0) {
      fetchRestaurants(location);
    }
  }, [location]);

  useEffect(() => {
    // Populating cuisines from restaurant data
    const allCuisines = restaurantData.flatMap(restaurant => restaurant.cuisines);
    const uniqueCuisines = new Set(allCuisines);
    setCuisines([...uniqueCuisines]);
    const allRestaurants = restaurantData.map(restaurant => restaurant.name);
    setRestaurantNames(allRestaurants);
  }, [restaurantData]);

  // Handle question index change
  const nextQuestionOrStart = () => {
    if (!gameStarted) {
      // If they clicked on it to start the game
      setGameStarted(true);
      fetchData();
      setCurrentQuestionIndex(0);
      return;
    } 

    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If questions are finished, fetch new batch
      fetchData();
      setCurrentQuestionIndex(0); // Reset index for new batch
    }
  };

  return (
    <div className="p-4">
      <h2>Questions</h2>
      {locationError && <p className="text-red-500">{locationError}</p>}
      {restaurantsError && <p className="text-red-500">{restaurantsError}</p>}
      
      {/* Only show the question if not loading */}
      {!isLoading && gameStarted && <p>{currentQuestions[currentQuestionIndex]?.text}</p>}

      {/* Show fetching message when loading */}
      {isLoading && (
        <p>{!gameStarted ? "Getting your questions ready!" : "Fetching next batch of questions..."}</p>
      )}

      {/* Only show the "Next" button if not loading, and when the game is started */}
      {!isLoading && (
        <button onClick={nextQuestionOrStart} disabled={isLoading}>
          {gameStarted ? "Next" : "Start"}
        </button>
      )}
    </div>
  );
}

export default GamePage;
