import React from 'react';
import { useSelector } from 'react-redux';
import './WeatherDisplay.css'; 
import sunny from './icons/sunny.png';
import cloudy from './icons/cloudy.png';
import rainy from './icons/rainy.png';
import windy from './icons/windy.png';
import snowy from './icons/snowy.png';

const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather.weather);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  console.log('Weather state:', weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const icons = { sunny, cloudy, rainy, windy, snowy };
  const getIcon = (condition) => {
    switch (condition) {
      case "Sunny":
        return icons.sunny;
      case "Cloudy":
        return icons.cloudy;
      case "Rainy":
        return icons.rainy;
      case "Windy":
        return icons.windy;
      case "Snowy":
        return icons.snowy;
      default:
        return icons.cloudy;
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="weather-display-container">
      {weather.DailyForecasts ? (
        <>
          <div className="weather-forecast-wrapper">
            {/* Render all forecast items */}
            {weather.DailyForecasts.map((forecast, index) => (
              <div key={index} className="weather-forecast-item">
                <div className="date-container">
                <h3 className="forecast-date">{formatDate(forecast.Date)}</h3>
                </div>
                <div className="forecast-details">
                <p className="forecast-temp">
                Min: <span>{convertToFahrenheitToCelsius(forecast.Temperature.Minimum.Value)} °C</span>, 
                Max: <span>{convertToFahrenheitToCelsius(forecast.Temperature.Maximum.Value)} °C</span>
                </p>
                </div>
                <p className="forecast-condition">{forecast.Day.IconPhrase}</p>
                <div className="weather-icon">
                  <img className="icon" src={getIcon(forecast.Day.IconPhrase)} alt={forecast.Day.IconPhrase} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

// Function to convert temperature from Fahrenheit to Celsius
const convertToFahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5 / 9).toFixed(1);
};

export default WeatherDisplay;