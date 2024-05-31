import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { setLocation } from '../reducers/weatherReducer';

const LocationInput = () => {
  const [location, setLocationInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLocation(location));
    dispatch(fetchWeather(location));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocationInput(e.target.value)} 
        placeholder="Enter location" 
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationInput;