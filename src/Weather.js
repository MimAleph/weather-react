import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  let [data, setData] = useState({ ready: false });

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
  if (data.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="type a city"
                className="form-control"
                // onChange={updateCity}
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
                <li className="date">
                  <FormattedDate date={data.date} />
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
    let apiKey = "77fa4ec6ddf217050010d2b77d41c45d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayWeather);
    return "Loading...";
  }

  // function ShowTemperature(event) {
  //   event.preventDefault();
  // }
  // function updateCity(event) {}
}
