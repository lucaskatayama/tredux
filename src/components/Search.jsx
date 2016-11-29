import React, { Component, PropTypes } from 'react';
import Icon from 'react-fontawesome';

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  static propTypes = {
    units: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  onChange(value) {
    this.setState({ value });
  }

  keyPress(e) {
    if (e.key === 'Enter') {
      this.context.router.push(`/search?q=${this.state.value}`);
    }
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-addon">
          <Icon name="search" />
        </div>
        <input
          onKeyPress={e => this.keyPress(e)}
          value={this.state.value}
          onChange={e => this.onChange(e.target.value)}
          type="text"
          className="form-control input-sm"
          style={{ width: '300px' }}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Search;
