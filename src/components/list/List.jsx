import React, { Component } from 'react';
import Card from 'components/list/Card';
import FontAwesome from 'react-fontawesome';

class List extends Component {
  render() {
    const { name, height, cards = [], isOver } = this.props;
    return (
      <div className="list">
        <div className="box" style={{ opacity: isOver ? 0.5 : 1 }}>
          <header className="box-header with-border">
            <span className="box-title">
              {name}
            </span>
            <button className="btn btn-danger btn-xs pull-right" onClick={this.props.remove}>
              <FontAwesome name="close" />
            </button>

          </header>
          {cards.map((e, idx) => <div className="box-body" style={{ maxHeight: height }}>
            <Card key={idx} description={e.description} />
          </div>)}
          <div className="box-footer">
            <button className="btn btn-sm btn-success">Add a card</button>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
