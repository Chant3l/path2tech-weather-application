import { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherData from './components/SearchBar';
import { getWeatherData } from './services/WeatherService';

function App() {
  const persistedLocation = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState(persistedLocation || 'Stockton, CA');
  const [WeatherData, setWeatherData] = useState([]);
  
}

export default App;
