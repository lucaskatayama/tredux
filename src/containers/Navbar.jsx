import React, { PropTypes, Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import NotificationsMenu from 'components/navbar/NotificationsMenu';
import UserMenu from 'components/navbar/UserMenu';
import NavbarHeader from 'components/navbar/NavbarHeader';


class Navbar extends Component {
  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top">
          <div className="container-fluid">
            <NavbarHeader />
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
                </div>
              </form>
            </div>
            {/* /.navbar-collapse */}
            {/* Navbar Right Menu */}
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                {/* User Account Menu */}
                <UserMenu />
                {/* Notifications Menu */}
                <NotificationsMenu />
                <li>
                  <Link to="/about">
                    <FontAwesome name="question-circle-o" size="lg" />{' About'}
                  </Link>
                </li>
              </ul>
            </div>
            {/* /.navbar-custom-menu */}
          </div>
          {/* /.container-fluid */}
        </nav>
      </header>
    );
  }
}


export default Navbar;
