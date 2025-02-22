import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState('');
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  const getLocation = () => {
    setLoading(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Please enable location access');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location unavailable');
            break;
          case error.TIMEOUT:
            setLocationError('Request timed out');
            break;
          default:
            setLocationError('An error occurred');
        }
        setLoading(false);
      }
    );
  };

  const fetchRestaurants = async () => {
    if (!location) return;
    setLoading(true);
    setLocationError('');

    const overpassQuery = `
      [out:json];
      node["amenity"="restaurant"](around:5000,${location.lat},${location.lng});
      out body;
    `;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const places = data.elements
        .filter((el) => el.tags && el.tags.amenity === "restaurant" && el.tags.name)
        .map((el) => ({
          id: el.id,
          name: el.tags.name,
          lat: el.lat,
          lng: el.lon
        }));
      setRestaurants(places);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLocationError('Failed to get restaurants');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Finder (OpenStreetMap)</h1>
      
      {loading && <p>Loading...</p>}

      {locationError && <p className="text-red-500">{locationError}</p>}

      {!location && !loading && (
        <button 
          onClick={getLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Find My Location
        </button>
      )}

      {location && (
        <div>
          <p>Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}</p>
          <button 
            onClick={fetchRestaurants}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
          >
            Get Nearby Restaurants
          </button>
        </div>
      )}

      {restaurants.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Nearby Restaurants:</h2>
          <ul>
            {restaurants.map((r) => (
              <li key={r.id} className="border p-2 mt-2">
                {r.name} ({r.lat.toFixed(6)}, {r.lng.toFixed(6)})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
