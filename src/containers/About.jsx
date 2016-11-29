import React from 'react';
import AboutMe from 'components/about/AboutMe';
import Profile from 'components/about/Profile';
import Techs from 'components/about/Techs';
import view from 'utils/ga';

export default () => {
  view();
  return (
    <div>
      <section className="content-header">
        <h1>
          Tredux
          <small>A Trello implementation using React/Redux</small>
        </h1>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <Profile />
            <AboutMe />
          </div>
          <div className="col-md-9 col-lg-9 col-xs-12 col-sm-12">
            <Techs />
          </div>
        </div>

      </section>
    </div>
  );
};
