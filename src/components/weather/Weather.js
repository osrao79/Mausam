import React from "react";
import "./Weather.css";

export default function Weather({ weather }) {
  console.log(weather.aqi);
  return (
    <div className="container">
      <div className="city">
        <h4>{weather.city_name}</h4>
        <sup>{weather.country_code}</sup>
      </div>
      <div className="temprature">
        <img
          className="image"
          src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
          alt={"name"}
        />
        <h1 className="temp">{weather.temp}&deg;C</h1>
        <p className="temp-desc">{weather.weather.description}</p>
      </div>
      <div className="pres-aqi">
        <h6 className="aqi">Air Quality Index: {weather.aqi}</h6>
        <h6 className="pres">Pressure: {weather.pres} mb </h6>
        <h6 className="wind-spd">Wind speed: {weather.wind_spd} m/s </h6>
        <h6 className="wind-dir">Wind Direction: {weather.wind_dir}&deg;C </h6>
      </div>
    </div>
  );
}
