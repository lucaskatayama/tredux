import React from 'react';


const NotificationsMenu = () => (
  <li className="dropdown notifications-menu">
    {/* Menu toggle button */}
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-bell-o" />
      <span className="label label-warning">10</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have 10 notifications</li>
      <li>
        {/* Inner Menu: contains the notifications */}
        <ul className="menu">
          <li>{/* start notification */}
            <a href="#">
              <i className="fa fa-users text-aqua" /> 5 new members joined today
            </a>
          </li>
          {/* end notification */}
        </ul>
      </li>
      <li className="footer"><a href="#">View all</a></li>
    </ul>
  </li>
);

export default NotificationsMenu;
