import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import InfoCard from "./Components/InfoCard";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [weatherResult, setWeatherResult] = useState([]);
  const [todaysWeather, setTodaysWeather] = useState({});
  const [currCity, setCurrCity] = useState();

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
    setWeatherResult([]);
    setTodaysWeather({});
  }

  async function fetchWeather(latitude, longitude, timezone, id) {
    let updatedTimezone = timezone.replace("/", "%2F");
    await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=${updatedTimezone}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrCity(id);
        const arr = [];
        const today = {
          isDay: data.current_weather.is_day,
          date: data.daily.time[0],
          min: data.daily.temperature_2m_min[0],
          max: data.daily.temperature_2m_max[0],
          curr: data.current_weather.temperature,
          code: data.current_weather.weathercode,
          precipPercent: data.daily.precipitation_probability_max[0],
          unit: data.daily_units.temperature_2m_max,
        };
        setTodaysWeather(today);

        for (let i = 1; i < data.daily.time.length; i++) {
          const obj = {
            date: data.daily.time[i],
            min: data.daily.temperature_2m_min[i],
            max: data.daily.temperature_2m_max[i],
            code: data.daily.weathercode[i],
            precipPercent: data.daily.precipitation_probability_max[i],
            unit: data.daily_units.temperature_2m_max,
          };
          arr.push(obj);
        }
        setWeatherResult(arr);
      });
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
              selected={currCity === item.id ? true : false}
              handleClick={() => {
                fetchWeather(
                  item.latitude,
                  item.longitude,
                  item.timezone,
                  item.id
                );
              }}
            />
          ))
        ) : (
          <>Nothing to see here...</>
        )}
      </div>
      <section className="weather_info_container">
        {weatherResult.length ? (
          <div>
            <InfoCard
              currTemp={todaysWeather.curr}
              minTemp={todaysWeather.min}
              maxTemp={todaysWeather.max}
              weatherCode={todaysWeather.code}
              precip={todaysWeather.precipPercent}
              unit={todaysWeather.unit}
              isDay={todaysWeather.isDay}
              date={todaysWeather.date}
            />
          </div>
        ) : null}

        <div className="forecast_container">
          {weatherResult?.map((item, index) => (
            <InfoCard
              currTemp={item.curr}
              minTemp={item.min}
              maxTemp={item.max}
              weatherCode={item.code}
              precip={item.precipPercent}
              unit={item.unit}
              isDay={item.isDay}
              key={index}
              date={item.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
