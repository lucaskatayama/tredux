import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BoardHeader from 'components/board/BoardHeader';
import Lists from './Lists';

function mapStateToProps(state) {
  return {
    board: {
      name: 'Board Name'
    },
  };
}


class Board extends Component {
  render() {
    return (
      <div>
        <BoardHeader name={this.props.board.name} />
        <Lists />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Board);
