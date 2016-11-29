import React from 'react';

export default () => (
  <div className="box box-primary">
    <div className="box-header with-border">
      <h3 className="box-title">About Me</h3>
    </div>
    <div className="box-body">
      <strong><i className="fa fa-book margin-r-5" /> Education</strong>
      <p className="text-muted">
        Bachelor degree in <b>Computer Engineering</b> from <b>State University of Campinas</b>
      </p>
      <hr />
      <strong><i className="fa fa-map-marker margin-r-5" /> Location</strong>
      <p className="text-muted">Brazi/SP/Campinas</p>
      <hr />
      <strong><i className="fa fa-pencil margin-r-5" /> Skills</strong>
      <p className="skills">
        <span className="label label-success">Coding</span>
        <span className="label label-info">NodeJS</span>
        <span className="label label-warning">MongoDB</span>
        <span className="label label-primary">React</span>
        <span className="label label-danger">Redux</span>
        <span className="label label-success">Flux</span>
        <span className="label label-info">ExpressJS</span>
        <span className="label label-warning">KoaJS</span>
      </p>
    </div>
  </div>
)
