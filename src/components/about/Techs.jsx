import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div className="techs">
    <h2 className="page-header">
      <FontAwesome name="globe" />{' '}
      Techs
    </h2>
    <ul>
      <li>React
        <ul>
          <li>Redux</li>
          <li>React Router</li>
          <li>React FontAwesome</li>
        </ul>
      </li>
      <li>ES7
        <ul>
          <li>BabelJS</li>
        </ul>
      </li>
      <li>NodeJS</li>
      <li>Tools
        <ul>
          <li>Webpack</li>
        </ul>
      </li>
    </ul>
  </div>
);
