import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.js';
import WeatherData from '../components/WeatherData.js';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  return (
    <div>
      <SearchBar onWeatherUpdate={setWeather} />
      {weather && <WeatherData weather={weather} />}
    </div>
  );
};

export default WeatherApp;
