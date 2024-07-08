import React, { useState } from 'react'
import { getWeatherData } from '../services/WeatherService.js'


const SearchBar = ({ onWeatherUpdate }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await getWeatherData(city);
      console.log("WeatherData:", response.data);
      onWeatherUpdate(response.data);
      setError('');
    } catch (err) {
      onWeatherUpdate(null);
      setError('City not found');
    }
  };

  return (
    <div className='weatherForm'>
      <div className='searchbar'>
        <input 
          type='text' 
          className="cityInput"
          placeholder='Enter City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button 
          className='searchWeather'
          type="submit"
          onClick={handleSearch}
          disabled={!city.trim()}
        >
          Get Weather
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SearchBar;
