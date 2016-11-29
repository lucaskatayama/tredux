import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div className="box box-primary techs">
    <div className="box-header">
      <h2 className="box-title">
        <FontAwesome name="globe" />{' '}
        Techs
      </h2>
    </div>
    <div className="box-body">
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
        <li>
          Styles
          <ul>
            <li>Bootstrap</li>
            <li>AdminLTE</li>
          </ul>

        </li>
      </ul>
    </div>
  </div>
);
