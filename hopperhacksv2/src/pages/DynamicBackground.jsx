import React, { useState, useEffect } from 'react';

function DynamicMultiGradientBackground() {
  const [gradient, setGradient] = useState(
    'linear-gradient(45deg, #ff7e5f, #feb47b)' // Default gradient
  );

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      setGradient(
        'linear-gradient(45deg, #ff7e5f 20%, #feb47b 40%, #f0e68c 60%), linear-gradient(135deg, #ffcc99 10%, #f0e68c 40%)'
      ); // Morning, with different spots for linear gradients
    } else if (hour >= 12 && hour < 18) {
      setGradient(
        'linear-gradient(45deg, #87cefa 30%, #4682b4 60%), linear-gradient(135deg, #ff6347 15%, #ff4500 50%)'
      ); // Afternoon with multiple gradients
    } else {
      setGradient(
        'linear-gradient(45deg, #2f4f4f 20%, #4682b4 60%), linear-gradient(135deg, #8a2be2 10%, #2f4f4f 50%)'
      ); // Night with multiple gradients
    }
  }, []);

  const backgroundStyle = {
    background: gradient,
    height: '100vh',
    transition: 'background 1s ease', // Smooth transition
  };

  return <div style={backgroundStyle}></div>;
}

export default DynamicMultiGradientBackground;
