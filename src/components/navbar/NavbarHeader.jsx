import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="navbar-header">
    <Link to="/" className="navbar-brand">
      <b>T</b>redux
    </Link>
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
      <i className="fa fa-bars" />
    </button>
  </div>
);
