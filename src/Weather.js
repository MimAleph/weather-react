import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Search() {
  let [data, setData] = useState({ ready: false });

  function DisplayWeather(response) {
    setData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      day: "Friday",
      date: "08",
      icon: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
    });
  }
  if (data.ready) {
    return (
      <div className="weather">
        <form onSubmit={ShowTemperature}>
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
        <div className="cityDate">
          <div className="row">
            <div className="col-md-8">
              <h1>{data.city}</h1>

              <ul>
                <li>
                  <span className="day">{data.day}</span>
                  <span className="date"> {data.date}</span>
                </li>
                <li className="description text-capitalize">
                  {data.description}
                </li>
                <li className="humidity">{data.humidity} %</li>
                <li className="wind">{data.wind} km/h</li>
              </ul>
            </div>

            <div className="col-md-4">
              <img src={data.icon} alt={data.description}></img>
              <h2>
                <span className="temperatur">{data.temperature}</span>
                <span className="units">°C</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    let apiKey = "ae9cc35716eff0ddc16a6f4a0947e685";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayWeather);
    return "Loading...";
  }

  function ShowTemperature(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
}
