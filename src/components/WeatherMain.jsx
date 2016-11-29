import React, { PropTypes } from 'react';

const WeatherMain = ({ data }) => (
  <div className="well">
    <p>Humidity: {data.humidity}</p>
    <p>Pressure: {data.pressure} hPa</p>
    <p>Temperature: {data.temp.toFixed(2)}</p>
    <p>Max: {data.temp_max}</p>
    <p>Min: {data.temp_min}</p>
  </div>
);

WeatherMain.propTypes = {
  data: PropTypes.shape({
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    temp: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
  }),
};


export default WeatherMain;
