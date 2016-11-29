import React, { PropTypes } from 'react';
import Icon from 'react-weathericons';

const map = {
  '50d': 'day-fog',
  '01d': 'day-sunny',
  '02d': 'day-cloudy',
  '03d': 'day-cloudy',
  '04d': 'cloudy',
  '09d': 'day-showers',
  '01n': 'night-clear',
  '02n': 'night-cloudy',
  '03n': 'night-alt-cloudy',
  '04n': 'cloudy',
  '09n': 'night-showers',
  '10n': 'night-alt-hail',
  '13n': 'night-alt-snow',
  '50n': 'night-fog',
};
// <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather" />
const WeatherImg = ({ icon }) => (
  <Icon name={map[icon]} size="2x" className="fa-fw" />
);

WeatherImg.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default WeatherImg;
