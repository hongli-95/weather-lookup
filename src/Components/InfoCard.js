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
import IconTempEmpty from "./WeatherIcons/IconTemperatureEmpty";
import IconTempFull from "./WeatherIcons/IconTemperatureFull";

export default function InfoCard({
  date,
  currTemp,
  minTemp,
  maxTemp,
  precip,
  unit,
  isDay,
  weatherCode,
}) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="Info_Card">
      <div className="Info_Card_weather">
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

        {isDay === 0 && weatherCode === 0 ? (
          <IconWiNightClear className="weather-icon" />
        ) : null}

        {isDay === 0 &&
        (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) ? (
          <IconWiNightAltCloudy className="weather-icon" />
        ) : null}

        {isDay === 0 && (weatherCode === 45 || weatherCode === 48) ? (
          <IconWiNightFog className="weather-icon" />
        ) : null}

        {isDay === 0 &&
        (weatherCode === 51 ||
          weatherCode === 53 ||
          weatherCode === 55 ||
          weatherCode === 56 ||
          weatherCode === 57) ? (
          <IconWiNightSprinkle className="weather-icon" />
        ) : null}

        {isDay === 0 &&
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

        {isDay === 0 &&
        (weatherCode === 71 ||
          weatherCode === 73 ||
          weatherCode === 75 ||
          weatherCode === 77 ||
          weatherCode === 85 ||
          weatherCode === 86) ? (
          <IconWiNightSnow className="weather-icon" />
        ) : null}

        {isDay === 0 &&
        (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) ? (
          <IconWiNightAltThunderstorm className="weather-icon" />
        ) : null}

        {/* wait here */}

        {isDay === undefined && weatherCode === 0 ? (
          <IconWiDaySunny className="weather-icon" />
        ) : null}

        {isDay === undefined &&
        (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) ? (
          <IconWiDayCloudy className="weather-icon" />
        ) : null}

        {isDay === undefined && (weatherCode === 45 || weatherCode === 48) ? (
          <IconWiDayFog className="weather-icon" />
        ) : null}

        {isDay === undefined &&
        (weatherCode === 51 ||
          weatherCode === 53 ||
          weatherCode === 55 ||
          weatherCode === 56 ||
          weatherCode === 57) ? (
          <IconWiDaySprinkle className="weather-icon" />
        ) : null}

        {isDay === undefined &&
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

        {isDay === undefined &&
        (weatherCode === 71 ||
          weatherCode === 73 ||
          weatherCode === 75 ||
          weatherCode === 77 ||
          weatherCode === 85 ||
          weatherCode === 86) ? (
          <IconWiDaySnow className="weather-icon" />
        ) : null}

        {isDay === undefined &&
        (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) ? (
          <IconWiDayThunderstorm className="weather-icon" />
        ) : null}

        {currTemp ? (
          <p className="Info_Card_curr-temp">
            Now: {currTemp} {unit}
          </p>
        ) : null}

        <div className="forecast_info">
          <IconTempEmpty className="thermometer-icon" />
          <p>
            {minTemp} {unit} -- {maxTemp} {unit}
          </p>
          <IconTempFull className="thermometer-icon" />
        </div>
        <div className="forecast_date">
          <p>
            {months[new Date(date).getMonth()]}, {new Date(date).getUTCDate()}{" "}
            {daysOfWeek[new Date(date).getDay()]}
          </p>
        </div>
        <p>Precipitation: {precip}%</p>
      </div>
    </div>
  );
}
