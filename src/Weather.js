import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  let [data, setData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function DisplayWeather(response) {
    setData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    let apiKey = "77fa4ec6ddf217050010d2b77d41c45d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayWeather);
  }

  if (data.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="type a city"
                className="form-control"
                onChange={updateCity}
              ></input>
            </div>
            <div className="col-md-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-light w-100"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo info={data} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
