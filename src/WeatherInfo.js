import React from "react";
import WeatherIcon from "./WeatherIcon";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-md-9">
          <h1>{props.info.city}</h1>

          <ul>
            <li className="date">
              <FormattedDate date={props.info.date} />
            </li>
            <li className="description text-capitalize">
              {props.info.description}
            </li>
            <li className="humidity">{props.info.humidity} %</li>
            <li className="wind">{props.info.wind} km/h</li>
          </ul>
        </div>

        <div className="col-md-3">
          <WeatherIcon code={props.info.icon} size={80} />
          <h2>
            <span className="temperatur">{props.info.temperature}</span>
            <span className="units">°C</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
