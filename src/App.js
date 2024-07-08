import React from 'react'
import WeatherData from './components/WeatherData.js'
import WeatherUpdate from './services/WeatherUpdate.js'
import './App.css'



const App = () => {
  return (
    <div className='app'>  
    <WeatherUpdate/>
    <WeatherData/>
    </div>
  )
}

export default App