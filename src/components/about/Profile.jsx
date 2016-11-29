import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div className="box box-primary">
    <div className="box-body box-profile">
      <img className="profile-user-img img-responsive img-circle" src="https://gravatar.com/avatar/54d4074475d7e585e2d7bba4ebe92525.jpg?size=400" alt="User profile" />
      <h3 className="profile-username text-center">Lucas Katayama</h3>
      <p className="text-muted text-center">Fullstack Javascript Developer</p>
      <ul className="list-group list-group-unbordered">
        <li className="list-group-item">
          <FontAwesome name="github" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucaskatayama" className="pull-right">https://github.com/lucaskatayama</a>
        </li>
        <li className="list-group-item">
          <FontAwesome name="linkedin-square" />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucaskatayama" className="pull-right">https://www.linkedin.com/in/lucaskatayama</a>
        </li>
        <li className="list-group-item">
          <FontAwesome name="twitter" />
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/@lucaskatayama" className="pull-right">
            https://twitter.com/@lucaskatayama
          </a>
        </li>
        <li className="list-group-item">
          <FontAwesome name="medium" />
          <a target="_blank" rel="noopener noreferrer" href="https://medium.lucaskatayama.com" className="pull-right">
            https://medium.lucaskatayama.com
          </a>
        </li>
      </ul>
    </div>
  </div>
);
