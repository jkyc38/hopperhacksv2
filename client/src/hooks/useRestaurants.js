// useRestaurants.js
import { useState } from 'react';

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
      node["amenity"="restaurant"](around:1000,${location.lat},${location.lng});
    );
    out body;
    `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const places = data.elements.map((el) => ({
        id: el.id,
        name: el.tags.name,
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
