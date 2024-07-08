import React from 'react';
import './WeatherData.css';
import clearIcon from '../images/clear.png';
import cloudIcon from '../images/cloud.png';
import drizzleIcon from '../images/drizzle.png';
import rainIcon from '../images/rain.png';
import snowIcon from '../images/snow.png';

const WeatherData = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather) {
    return;
  }

  const roundedTemp = Math.floor(weather.main.temp);
  
  const allIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const icon = allIcons[weather.weather[0].icon] || clearIcon;

  return (
    <div className="card">
      <h1 className="displayCity">{weather.name}</h1>
      <img src={icon} alt={weather.weather[0].description} className='weather-icon'/>
      <p className="temp">Temperature: {roundedTemp} °F</p>
      <p className='humidity'>Humidity: {weather.main.humidity}%</p>
      <p className='description'>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherData;


