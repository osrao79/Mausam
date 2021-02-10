import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/weather/Weather";
import Footer from "./components/Footer/Footer";
const key = "d0b49537880c4a4193357cc5e92210a0";

export default function App() {
  const [weatherData, setweatherData] = useState([]);
  const [city, setCity] = useState("");

  //fetching data from weathbit.io api
  async function getLocationWeather(city) {
    const result = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}&include=minutely`
    );

    const res = await result.json();
    setweatherData(res.data);
  }

  //getting value from input
  const updateInput = (evt) => {
    setCity(evt.target.value);
  };

  //changing bacground based on time

  useEffect(() => {
    getLocationWeather("Chittorgarh");
  }, []);

  return (
    <div className="main">
      <div className="navbar">
        <h1 className="title">Mausam</h1>
      </div>
      <div className="searchBar">
        <input
          className="searchBlock"
          placeholder="Search City"
          onChange={updateInput}
        ></input>
        <button
          className="searchBtn"
          onClick={() => {
            getLocationWeather(city);
          }}
        >
          Search
        </button>
      </div>

      {weatherData.length > 0 ? (
        <>
          <Weather weather={weatherData[0]} />
        </>
      ) : (
        <p>Loading</p>
      )}
      <Footer />
    </div>
  );
}

//
