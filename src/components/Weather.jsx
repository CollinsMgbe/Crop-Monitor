import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch weather data
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=2332459&appid=ff08f7e2922522307a411b43563ba7ed&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);

        // Fetch air quality data
        const airQualityResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=6.5244&lon=3.3792&appid=ff08f7e2922522307a411b43563ba7ed`
        );
        const airQualityData = await airQualityResponse.json();
        setAirQuality(airQualityData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="p-6 bg-green-500 text-white shadow-lg">
      {weather ? (
        <div >
          <h3 className="text-2xl font-bold mb-4">Weather Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <h3 className="text-lg font-bold">{weather.name}</h3>
            <p>
              <strong>Temperature:</strong> {weather.main.temp}°C
            </p>
            <p>
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p>
              <strong>Wind:</strong> {weather.wind.speed} m/s, {weather.wind.deg}
              °
            </p>
            <p>
              <strong>Rainfall:</strong>{" "}
              {weather.rain && weather.rain["1h"]
                ? `${weather.rain["1h"]} mm`
                : "No data"}
            </p>
            {airQuality && airQuality.list && (
              <p>
                <strong>Air Quality:</strong>{" "}
                {airQuality.list[0].main.aqi} (1=Good, 5=Poor)
              </p>
            )}
            <p>
              <strong>Sunrise:</strong>{" "}
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
            <p>
              <strong>Sunset:</strong>{" "}
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;