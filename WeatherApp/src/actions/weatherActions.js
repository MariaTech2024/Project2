import axios from 'axios';
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from '../reducers/weatherReducer';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = (location) => async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const locationResponse = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`
      );
      console.log('Location Response:', locationResponse.data); // Debugging line
      const locationKey = locationResponse.data[0].Key;
  
      const weatherResponse = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
      );
      console.log('Weather Response:', weatherResponse.data); // Debugging line
      dispatch(fetchWeatherSuccess(weatherResponse.data));
    } catch (error) {
      console.error('API Error:', error); // Debugging line
      dispatch(fetchWeatherFailure(error.message));
    }
  };