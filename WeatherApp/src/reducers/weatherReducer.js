import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  weather: {},
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherRequest: (state) => {
      state.loading = true;
    },
    fetchWeatherSuccess: (state, action) => {
      state.loading = false;
      state.weather = action.payload;
    },
    fetchWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setLocation,
} = weatherSlice.actions;

export default weatherSlice.reducer;