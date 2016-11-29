import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div className="box box-primary">
    <div className="box-body box-profile">
      <img className="profile-user-img img-responsive img-circle" src="https://gravatar.com/avatar/54d4074475d7e585e2d7bba4ebe92525.jpg?size=400" alt="User profile" />
      <h3 className="profile-username text-center">Lucas Katayama</h3>
      <p className="text-muted text-center">Fullstack Javascript Developer</p>
      <ul className="list-group list-group-unbordered text-center">
        <li className="list-group-item">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucaskatayama">
            <FontAwesome name="github" /> GitHub
          </a>
        </li>
        <li className="list-group-item">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucaskatayama">
            <FontAwesome name="linkedin-square" /> LinkedIn
          </a>
        </li>
        <li className="list-group-item">
          <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/users/1181036/lucas-katayama">
            <FontAwesome name="stack-overflow" /> Stack Overflow
          </a>
        </li>
        <li className="list-group-item">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/@lucaskatayama">
            <FontAwesome name="twitter" /> Twitter
          </a>
        </li>
        <li className="list-group-item">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.lucaskatayama.com">
            <FontAwesome name="medium" /> Medium
          </a>
        </li>
      </ul>
    </div>
  </div>
);
