import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import { createCard } from 'actions/lists';
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

@DropTarget('LIST', listTarget, (conn, monitor) => ({
  connectDropTarget: conn.dropTarget(),
  isOver: monitor.isOver(),
}))
@DragSource('LIST', listSource, (conn, monitor) => ({
  connectDragSource: conn.dragSource(),
  isDragging: monitor.isDragging(),
}))

class ListContainer extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
  }
  constructor() {
    super();
    this.state = {
      addingCard: false,
    };
  }

  addCard(card) {
    console.log(card);
    this.props.createCard(this.props.id, card);
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      ...props
    } = this.props;
    return connectDropTarget(
      <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
        {
          connectDragSource(
            (
              <div>
                <List
                  {...props}
                  onAdd={card => this.addCard(card)}
                  addCard={() => this.setState({ addingCard: true })}
                  onCancel={() => this.setState({ addingCard: false })}
                  addingCard={this.state.addingCard}
                />
              </div>
            ),
          )
        }
      </div> // eslint-disable-line
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCard: (id, card) => dispatch(createCard(id, card)),
});

export default connect(null, mapDispatchToProps)(ListContainer);
