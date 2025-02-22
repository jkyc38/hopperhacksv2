import React from 'react';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState('');
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      // Success
      (position) => {
        console.log("Got location:", position.coords);
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
      },
      // Error
      (error) => {
        console.error("Location error:", error);
        switch(error.code) {
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

  const sendLocationToBackend = async () => {
    if (!location) return;

    try {
      const response = await fetch('http://localhost:3001/api/nearby-restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: location.lat,
          longitude: location.lng
        })
      });

      const data = await response.json();
      console.log("Restaurants:", data);
      // Handle the restaurant data here
      
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLocationError('Failed to get restaurants');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Finder</h1>
      
      {loading && (
        <div className="text-center">
          <p>Getting your location...</p>
        </div>
      )}

      {locationError && (
        <div className="text-red-500 mb-4">
          <p>{locationError}</p>
        </div>
      )}

      {!location && !loading && (
        <button 
          onClick={getLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Find Restaurants Near Me
        </button>
      )}

      {location && (
        <div>
          <p className="mb-2">
            Location found: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
          </p>
          <button 
            onClick={sendLocationToBackend}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Get Nearby Restaurants
          </button>
        </div>
      )}
    </div>
  );
}

export default App;