import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchCitySuggestions = async (query) => {
    if (!query) return;

    try {
      const res = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
        params: { namePrefix: query, limit: 5 },
        headers: {
          'X-RapidAPI-Key': 'b0290222d8msh242d8b6eca90389p16d1c7jsn9ad8afda728d',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      });
      const cityNames = res.data.data.map((city) => `${city.city}, ${city.countryCode}`);
      setSuggestions(cityNames);
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchCitySuggestions(input);
    }, 300); // debounce API calls
    return () => clearTimeout(timeoutId);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  const handleSelect = (city) => {
    setInput(city);
    setSuggestions([]);
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="🔍 Enter city name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="autocomplete-list">
          {suggestions.map((city, idx) => (
            <li key={idx} onClick={() => handleSelect(city)} className="autocomplete-item">
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;

