import React, { Component } from 'react';
import Card from 'components/list/Card';
import { DragSource, DropTarget } from 'react-dnd';

const listSource = {
  beginDrag(props) {
    return {
      name: props.name,
      cards: props.cards,
    };
  },
};

const listTarget = {
  hover(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

@DropTarget('LIST', listTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))
@DragSource('LIST', listSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class List extends Component {
  render() {
    const { name, height, cards, text, isDragging, connectDragSource, isOver, connectDropTarget } = this.props;
    const cardsList = (cards && cards.length > 0) ? cards.map((e, idx) => <div className="box-body" style={{ maxHeight: height }}>
      <Card key={idx} description={e.description} />
    </div>) : '';
    const component = connectDragSource(connectDropTarget(
      <div className="box" style={{ opacity: isOver ? 0.5 : 1 }}>
        <header className="box-header with-border">
          <span className="box-title">{name}</span>
        </header>
        {cardsList}
        <div className="box-footer">
          <button className="btn btn-sm btn-success">Add a card</button>
        </div>
      </div>
    ));
    return (
      <div className="col-md-3 list">
        {component}
      </div>
    );
  }
}

export default List;
