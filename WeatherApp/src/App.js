import React from 'react';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="app-container">
      <h1>Weather Forecast</h1>
      <div className="input-container">
        <LocationInput />
      </div>
      <div className="weather-container">
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;