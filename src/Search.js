import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [data, setData] = useState("");

  function DisplayWeather(response) {
    setData(
      <div>
        <li> Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li> Description: {response.data.weather[0].description}</li>
        <li> Humidity: {Math.round(response.data.main.humidity)}%</li>
        <li> Wind: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          Icon: `http://openweathermap.org/img/wn/${response.data.weather.icon}
          @2x.png`
        </li>
      </div>
    );
  }

  function ShowTemperature(event) {
    event.preventDefault();
    let apiKey = "ae9cc35716eff0ddc16a6f4a0947e685";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.default.get(apiUrl).then(DisplayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={ShowTemperature}>
        <input
          type="search"
          placeholder="type a city"
          onChange={updateCity}
        ></input>
        <input type="submit" placeholder="Search"></input>
      </form>
      <ul>{data}</ul>
    </div>
  );
}
