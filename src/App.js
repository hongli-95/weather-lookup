import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [currCity, setCurrCity] = useState();
  const [weatherResult, setWeatherResult] = useState();

  const recordInput = (e) => {
    setInput(e.target.value);
  };

  async function fetchCities(city, e) {
    e.preventDefault();
    await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  }

  async function fetchWeather(latitude, longitude, timezone, id) {
    let updatedTimezone = timezone.replace("/", "%2F");
    await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=${updatedTimezone}&forecast_days=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherResult(data);
      });
    setCurrCity(id);
  }

  return (
    <div className="App">
      <h1>Weather Lookup</h1>
      <form onSubmit={(e) => fetchCities(input, e)}>
        <input
          className="city_input"
          onChange={recordInput}
          value={input}
          placeholder="Enter city name..."
        />
        <button
          className="search_button"
          onClick={(e) => fetchCities(input, e)}
        >
          Search
        </button>
      </form>
      <div className="card_container">
        {result?.length ? (
          result.map((item) => (
            <Card
              city={item.name}
              state={item.admin1}
              country={item.country}
              key={item.id}
              weatherCode={
                weatherResult ? weatherResult.current_weather.weathercode : 0
              }
              isDay={weatherResult ? weatherResult.current_weather.is_day : ""}
              handleClick={() => {
                fetchWeather(
                  item.latitude,
                  item.longitude,
                  item.timezone,
                  item.id
                );
              }}
              show={item.id === currCity ? true : false}
              currTemp={
                weatherResult
                  ? weatherResult?.current_weather.temperature
                  : "N/A"
              }
              minTemp={
                weatherResult
                  ? weatherResult?.daily.temperature_2m_min[0]
                  : "N/A"
              }
              maxTemp={
                weatherResult
                  ? weatherResult?.daily.temperature_2m_max[0]
                  : "N/A"
              }
              unit={
                weatherResult
                  ? weatherResult?.daily_units.temperature_2m_max
                  : "N/A"
              }
            />
          ))
        ) : (
          <>Nothing to see here...</>
        )}
      </div>
    </div>
  );
}

export default App;
