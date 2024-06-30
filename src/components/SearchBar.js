import React from 'react'


const SearchBar = () => {
  return (
    <div className='weather'>
        <div className='searchbar'>
            <input type='text' class="cityInput"
            placeholder='Enter City'/>
            <button type="submit" class="searchWeather">Get Weather</button>
        </div>
    </div>
  )
}

export default SearchBar;

