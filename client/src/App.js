<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import GamePage from "./pages/GamePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/BigBack" element={<GamePage></GamePage>} />
      </Routes>
    </Router>
=======
// App.js
import React from 'react';
import { useLocation } from './hooks/useLocation';
import { useRestaurants } from './hooks/useRestaurants';

function App() {
  const { location, locationError, loading: locationLoading, getLocation } = useLocation();
  const { restaurants, error: restaurantsError, loading: restaurantsLoading, fetchRestaurants } = useRestaurants();

  const handleGetLocation = () => {
    getLocation();
  };

  const handleFetchRestaurants = () => {
    if (location) {
      fetchRestaurants(location);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Finder (OpenStreetMap)</h1>

      {(locationLoading || restaurantsLoading) && <p>Loading...</p>}

      {locationError && <p className="text-red-500">{locationError}</p>}
      {restaurantsError && <p className="text-red-500">{restaurantsError}</p>}

      {!location && !locationLoading && (
        <button
          onClick={handleGetLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Find My Location
        </button>
      )}

      {location && (
        <div>
          <p>Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}</p>
          <button
            onClick={handleFetchRestaurants}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
          >
            Get Nearby Restaurants
          </button>
        </div>
      )}

    </div>
>>>>>>> be8240c2 (Reorder)
  );
}

export default App;
