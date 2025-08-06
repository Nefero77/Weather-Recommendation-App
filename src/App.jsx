import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import { fetchWeather } from './services/weatherAPI';

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (location) => {
    try {
      const data = await fetchWeather(location);
      setWeather(data);
    } catch (err) {
      alert("❌ Failed to fetch weather. Please check the location and try again.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🌤️ Weather & Recommendations</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <>
          <WeatherCard data={weather} />
          <Recommendations weather={weather} />
        </>
      )}
      <Footer />
    </div>
  );
}


export default App;
