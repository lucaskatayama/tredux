import React, { Component } from 'react';
import Card from 'components/list/Card';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

const listSource = {
  beginDrag(props) {
    return {
      name: props.name,
      cards: props.cards,
    };
  },
};

const listTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

@DropTarget('LIST', listTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource('LIST', listSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class List extends Component {
  render() {
    const { name, height, cards, text, isDragging, connectDragSource, connectDropTarget } = this.props;
    const cardsList = cards && cards.length > 0 ? cards.map((e, idx) => <div className="box-body" style={{ maxHeight: height }}>
      <Card key={idx} description={e.description} />
    </div>) : '';
    return (
      <div className="col-md-3 list">
        {
          connectDragSource(connectDropTarget(
            <div className="box" style={{ opacity: isDragging ? 0.5 : 1 }}>
              <header className="box-header with-border">
                <span className="box-title">{name}</span>
              </header>
              {cardsList}
              <div className="box-footer">
                <button className="btn btn-sm btn-success">Add a card</button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
};

export default List;
