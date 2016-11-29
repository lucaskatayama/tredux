import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';


const BoardHeader = ({ name }) => (
  <section className="content-header board-header">
    <span className="board-name">
      <a className="btn">{name}</a>
    </span>
    <span style={{ verticalAlign: 'middle' }}>
      <FontAwesome name="star-o" />
    </span>
  </section>
);


BoardHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BoardHeader;
