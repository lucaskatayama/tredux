import React, { PropTypes } from 'react';
import Card from 'components/list/Card';
import FontAwesome from 'react-fontawesome';

const List = (props) => {
  const { name, height, cards = [], isOver } = props;
  return (
    <div className="list">
      <div className="box box-primary" style={{ opacity: isOver ? 0.5 : 1 }}>
        <header className="box-header with-border">
          <span className="box-title">
            {name}
          </span>
          <div className="btn btn-xs pull-right" onClick={props.remove}>
            <FontAwesome name="close" />
          </div>

        </header>
        {cards.map((e, idx) => <div className="box-body" style={{ maxHeight: height }}>
          <Card key={idx} description={e.description} />
        </div>)}
        <div className="box-footer">
          <button className="btn btn-sm btn-success" onAdd={props.onAddCard}>
            <FontAwesome name="plus" />
            {' '} Add a card
          </button>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  remove: PropTypes.func,
  name: PropTypes.string,
  height: PropTypes.number,
  isOver: PropTypes.bool,
  onAddCard: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default List;
