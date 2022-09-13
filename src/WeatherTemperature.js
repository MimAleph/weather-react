import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [uint, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (uint === "celsius") {
    return (
      <div className="weatherTemperature">
        <h2>
          <span className="temperatur">{props.celsius}</span>
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="weatherTemperature">
        <h2>
          <span className="temperatur">{fahrenheit}</span>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
