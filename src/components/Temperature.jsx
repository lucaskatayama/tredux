import React, { PropTypes } from 'react';


const Temperature = ({ units, value = '- ' }) => {
  const unit = units === 'imperial' ? '°F' : '°C';
  return (
    <span className="temperature">
      {value}
      <small className="unit">{unit}</small>
    </span>
  );
};

Temperature.propTypes = {
  units: PropTypes.string,
  value: PropTypes.number,
};


export default Temperature;
