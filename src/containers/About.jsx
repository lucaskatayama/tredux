import React from 'react';
import AboutMe from 'components/about/AboutMe';
import Profile from 'components/about/Profile';
import Techs from 'components/about/Techs';


export default () => (
  <div>
    <section className="content-header">
      <h1>
        Tredux
        <small>A Trello implementation using React/Redux</small>
      </h1>
    </section>
    <section className="content">
      <div className="row">
        <div className="col-md-3">
          <Profile />
          <AboutMe />
        </div>
        <div className="col-md-9">
          <Techs />
        </div>
      </div>

    </section>
  </div>
);
