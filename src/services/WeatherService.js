import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
console.log("API_KEY:", API_KEY); // Log the API key to ensure it is read correctly

export async function getWeatherData(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        console.log("API response:", response); // Log the API response
        return response;
    } catch (err) {
        console.error("Error in API call:", err); // Log any error from the API call
        throw err;
    }
}
