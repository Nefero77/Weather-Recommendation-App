import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_KEY; // Put your key in .env

export const fetchWeather = async (location) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};
