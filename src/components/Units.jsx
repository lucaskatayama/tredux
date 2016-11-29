import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as UnitsActions from 'actions/units';

class Units extends Component {
  static propTypes = {
    changeUnits: PropTypes.func,
    units: PropTypes.string,
  };

  onChange(e) {
    this.props.changeUnits(e);
  }

  render() {
    return (
      <span style={{ paddingRight: '10px' }}>
        <label className="radio-inline" style={{ color: 'white' }}>
          <input
            onChange={e => this.onChange(e.target.value)}
            type="radio"
            name="units"
            value="imperial"
            checked={this.props.units === 'imperial'}
          /> F°
        </label>
        <label className="radio-inline" style={{ color: 'white' }}>
          <input
            onChange={e => this.onChange(e.target.value)}
            type="radio"
            name="units"
            value="metric"
            checked={this.props.units === 'metric'}
          /> C°
        </label>
      </span>
    );
  }
}

export default connect(null, UnitsActions)(Units);
