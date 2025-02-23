// useRestaurants.js
import { useState } from 'react';
import { data } from 'react-router-dom';

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRestaurants = async (location) => {
    if (!location) return;
    setLoading(true);
    setError('');

    const overpassQuery = `
    [out:json];
    (
      node["amenity"="restaurant"](around:10000,${location.lat},${location.lng});
    );
    out body;
    `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.elements);
      const places = data.elements
        .filter((el) => el.tags.cuisine && el.tags.cuisine.trim() !== "") // Exclude missing/empty cuisines
        .map((el) => ({
          id: el.id,
          name: el.tags.name || "Unknown", 
          lat: el.lat,
          lng: el.lon,
          cuisines: el.tags.cuisine.split(";"), 
      }));
      setRestaurants(places);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError('Failed to get restaurants');
    }
    setLoading(false);
  };

  return { restaurants, error, loading, fetchRestaurants };
}
