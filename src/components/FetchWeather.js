import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchWeather = ({ cityData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const locationKey = cityData.Key;
        const response = await axios.get(`${process.env.REACT_APP_PROXY_URL}/api/currentconditions/v1/${locationKey}`);
        const weatherData = response.data[0]; 
        setData(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('There was an error fetching the weather data.');
      } finally {
        setLoading(false);
      }
    };

    if (cityData) {
      fetchWeatherData();
    }
  }, [cityData]);
  

  const getIconUrl = (iconNumber) => {
    const iconString = iconNumber.toString().padStart(2, '0');
    return `https://developer.accuweather.com/sites/default/files/${iconString}-s.png`;
  };

  if (loading) {
    return <div className="loader-box">Loading...</div>;
  }

  if (error) {
    return <div className="error-box">{error}</div>;
  }

  return (
    <>
      {data && (
        <main className={`box ${data.IsDayTime ? 'day' : 'night'}`}>
          <div className={data.IsDayTime ? 'sun animate-sun' : 'moon animate-moon'}></div>
          <h3 className="location">
            {cityData.EnglishName} | {cityData.Country.EnglishName}
          </h3>
          <div className="details">
            <p className="weather-text">{data.WeatherText}</p>
            <img className="weather-img" src={getIconUrl(data.WeatherIcon)} alt="weather icon" />
            <h2 className="temperature-value">
              {Math.ceil(data.Temperature?.Metric?.Value)}
              <sup className="deg">&deg;{data.Temperature?.Metric?.Unit}</sup>
            </h2>
          </div>
        </main>
      )}
    </>
  );
};

export default FetchWeather;
