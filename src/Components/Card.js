import "../App.css";
import IconWiDaySunny from "./WeatherIcons/IconWiDaySunny";
import IconWiDayCloudy from "./WeatherIcons/IconWiDayCloudy";
import IconWiDayFog from "./WeatherIcons/IconWiDayFog";
import IconWiDaySprinkle from "./WeatherIcons/IconWiDaySprinkle";
import IconWiDayRain from "./WeatherIcons/IconWiDayRain";
import IconWiDaySnow from "./WeatherIcons/IconWiDaySnow";
import IconWiDayThunderstorm from "./WeatherIcons/IconWiDayThunderstorm";
import IconWiNightAltCloudy from "./WeatherIcons/IconWiNightAltCloudy";
import IconWiNightAltRain from "./WeatherIcons/IconWiNightAltRain";
import IconWiNightAltThunderstorm from "./WeatherIcons/IconWiNightAltThunderstorm";
import IconWiNightClear from "./WeatherIcons/IconWiNightClear";
import IconWiNightFog from "./WeatherIcons/IconWiNightFog";
import IconWiNightSnow from "./WeatherIcons/IconWiNightSnow";
import IconWiNightSprinkle from "./WeatherIcons/IconWiNightSprinkle";

export default function Card({
  city,
  state,
  country,
  handleClick,
  show = false,
  currTemp,
  maxTemp,
  minTemp,
  unit,
  weatherCode,
  isDay,
}) {
  return (
    <div
      className="Card"
      onClick={handleClick}
      style={show ? { maxHeight: "300px" } : { maxHeight: "90px" }}
    >
      <p>
        <span className="Card_city">{city}</span>, {state}
      </p>
      <p className="Card_country">{country}</p>

      {isDay && weatherCode === 0 ? (
        <IconWiDaySunny className="weather-icon" />
      ) : null}

      {isDay &&
      (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) ? (
        <IconWiDayCloudy className="weather-icon" />
      ) : null}

      {isDay && (weatherCode === 45 || weatherCode === 48) ? (
        <IconWiDayFog className="weather-icon" />
      ) : null}

      {isDay &&
      (weatherCode === 51 ||
        weatherCode === 53 ||
        weatherCode === 55 ||
        weatherCode === 56 ||
        weatherCode === 57) ? (
        <IconWiDaySprinkle className="weather-icon" />
      ) : null}

      {isDay &&
      (weatherCode === 61 ||
        weatherCode === 63 ||
        weatherCode === 65 ||
        weatherCode === 66 ||
        weatherCode === 67 ||
        weatherCode === 80 ||
        weatherCode === 81 ||
        weatherCode === 82) ? (
        <IconWiDayRain className="weather-icon" />
      ) : null}

      {isDay &&
      (weatherCode === 71 ||
        weatherCode === 73 ||
        weatherCode === 75 ||
        weatherCode === 77 ||
        weatherCode === 85 ||
        weatherCode === 86) ? (
        <IconWiDaySnow className="weather-icon" />
      ) : null}

      {isDay &&
      (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) ? (
        <IconWiDayThunderstorm className="weather-icon" />
      ) : null}

      {!isDay && weatherCode === 0 ? (
        <IconWiNightClear className="weather-icon" />
      ) : null}

      {!isDay &&
      (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) ? (
        <IconWiNightAltCloudy className="weather-icon" />
      ) : null}

      {!isDay && (weatherCode === 45 || weatherCode === 48) ? (
        <IconWiNightFog className="weather-icon" />
      ) : null}

      {!isDay &&
      (weatherCode === 51 ||
        weatherCode === 53 ||
        weatherCode === 55 ||
        weatherCode === 56 ||
        weatherCode === 57) ? (
        <IconWiNightSprinkle className="weather-icon" />
      ) : null}

      {!isDay &&
      (weatherCode === 61 ||
        weatherCode === 63 ||
        weatherCode === 65 ||
        weatherCode === 66 ||
        weatherCode === 67 ||
        weatherCode === 80 ||
        weatherCode === 81 ||
        weatherCode === 82) ? (
        <IconWiNightAltRain className="weather-icon" />
      ) : null}

      {!isDay &&
      (weatherCode === 71 ||
        weatherCode === 73 ||
        weatherCode === 75 ||
        weatherCode === 77 ||
        weatherCode === 85 ||
        weatherCode === 86) ? (
        <IconWiNightSnow className="weather-icon" />
      ) : null}

      {!isDay &&
      (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) ? (
        <IconWiNightAltThunderstorm className="weather-icon" />
      ) : null}

      <div className="Card_weather">
        <p className="Card_curr-temp">
          Current Temperature: {currTemp} {unit}
        </p>
        <p>
          Today's lowest: {minTemp} {unit}
        </p>
        <p>
          Today's highest: {maxTemp} {unit}
        </p>
      </div>
    </div>
  );
}
