import React from 'react';

function WeatherCard({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={iconUrl} alt={data.weather[0].main} className="weather-icon" />
      <p className="weather-main">{data.weather[0].main} - {data.weather[0].description}</p>
      <p className="temp">🌡️ {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
    </div>
  );
}
export default WeatherCard;