import React, { PropTypes } from 'react';
import gravatar from 'utils/gravatar';

const UserMenu = ({ email, username = 'John Doe' }) => {
  const avatar = gravatar(email);
  return (
    <li className="dropdown user user-menu">
      {/* Menu Toggle Button */}
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        {/* The user image in the navbar*/}
        <img src={avatar} className="user-image" alt="User" />
        <span className="hidden-xs">{username}</span>
      </a>
      <ul className="dropdown-menu">
        {/* The user image in the menu */}
        <li className="user-header">
          <img src={avatar} className="img-circle" alt="User" />
          <p>
            {username}
          </p>
        </li>
        {/* Menu Body */}
        <li className="user-body">
          <div className="row">
            <div className="col-xs-4 text-center">
              <a href="#">Followers</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Sales</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Friends</a>
            </div>
          </div>
          {/* /.row */}
        </li>
        {/* Menu Footer*/}
        <li className="user-footer">
          <div className="pull-left">
            <a href="#" className="btn btn-default btn-flat">Profile</a>
          </div>
          <div className="pull-right">
            <a href="#" className="btn btn-default btn-flat">Sign out</a>
          </div>
        </li>
      </ul>
    </li>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
};

export default UserMenu;
