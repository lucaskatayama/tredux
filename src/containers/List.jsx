import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import List from 'components/list/List';


const listSource = {
  beginDrag() {
    return {};
  },
};

const listTarget = {
  hover(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    props.move(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex; // eslint-disable-line no-param-reassign
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

class ListContainer extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
  }
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      ...props
    } = this.props;
    return connectDropTarget(
      <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
        { connectDragSource(<div><List {...props} /></div>) }
      </div> // eslint-disable-line
    );
  }
}

export default ListContainer;
