import React, { useState } from 'react';
import axios from 'axios';
import { ImSearch } from "react-icons/im";
import FetchWeather from './components/FetchWeather';

function App() {
  const [citySearch, setCitySearch] = useState('');
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCity = (e) => {
    e.preventDefault();
    setError(null);
    // axios.get(`http://localhost:4000/api/locations/v1/cities/search?q=${citySearch}`)
    axios.get(
      `${process.env.REACT_APP_PROXY_URL}/api/locations/v1/cities/search`,
      { params: { q: citySearch } }
    )
      .then((response) => {
        if (response.data.length > 0) {
          setCitySearch('');
          setCityData(response.data[0]);
        } else {
          setError('City not found. Please try something else.');
          setCityData(null);
        }
      })
      .catch((err) => {
        console.error('Error fetching city data:', err);
        setError('There was an error fetching the data.');
        setCityData(null);
      });
  };

  return (
    <div className="App">
      <div className="heading">
      <h1>CityWeather</h1>
      <h3>Explore weather worldwide!</h3>
      </div>
      <div className="form-container">
        <form className="form-group custom-form" autoComplete="off" onSubmit={fetchCity}>
          <div className="para">
          <label>Search any city for instant weather updates.</label>
          <div className="search-box">
            <input 
              type="text" 
              className="form-control" 
              required 
              placeholder="Enter city name..."
              value={citySearch} 
              onChange={(e) => setCitySearch(e.target.value)} 
            />
          </div>
          </div>
          <button type="submit" className="btn"><ImSearch /></button> 
        </form>
        {error && <div className="error-box">{error}</div>}
      </div>
        <div className="weather-container">
      {cityData && (
          <FetchWeather cityData={cityData} />
        )}
        </div>
    </div>  
  );
}

export default App;
