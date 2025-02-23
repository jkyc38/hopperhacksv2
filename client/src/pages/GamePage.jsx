import React, { useEffect, useState } from "react";
import { useLocation } from '../hooks/useLocation';
import { useRestaurants } from '../hooks/useRestaurants';

function GamePage() {
  const { location, locationError, loading: locationLoading, getLocation } = useLocation();
  const { restaurants, error: restaurantsError, loading: restaurantsLoading, fetchRestaurants } = useRestaurants();
  const [cuisinesToRestaurants, setCuisinestoRestaurant] = useState(new Map());
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (location && restaurants.length == 0) {
      fetchRestaurants(location);
    }
  }, [location]);

  useEffect(() => {
    const map = new Map();
    restaurants.forEach(restaurant => {
      restaurant.cuisines.forEach(cuisine => {
        if (!map.has(cuisine)) {
          map.set(cuisine, []);
        }
        map.get(cuisine).push(restaurant.name);
      });
    });
    setCuisinestoRestaurant(map);
    console.log(map)
  }, [restaurants]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Finder (OpenStreetMap)</h1>

      {locationError && <p className="text-red-500">{locationError}</p>}
      {restaurantsError && <p className="text-red-500">{restaurantsError}</p>}

      {/* Additional UI for testing can be placed here */}
    </div>
  );
}

export default GamePage;
