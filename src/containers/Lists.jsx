import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from 'components/list/List';
import ListNew from 'components/board/ListNew';
import { newList, changePosition } from 'actions/lists';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';


function collect(co, monitor) {
  return {
    connectDropTarget: co.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const spec = {
  drop: function (props) {
    console.log(props);
  },
};

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  createNewList: list => dispatch(newList(list)),
  changePosition: list => dispatch(changePosition(list)),
});

@DragDropContext(HTML5Backend)
class Lists extends Component {

  componentWillMount() {
    this.updateDimensions();
  }

  // Handle resize changes
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  // Removes when leave page
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }


  newList() {
    this.setState({ adding: true });
  }

  saveNewList(list) {
    this.props.createNewList(list);
    this.setState({ adding: false });
  }

  onCancel() {
    this.setState({ adding: false });
  }

  // Update main content height, removes Navbar height
  updateDimensions = () => {
    const offset = 220;
    const height = window.innerHeight - offset;
    this.setState({ height });
  }

  moveCard(dragIndex, hoverIndex) {
    if (dragIndex !== undefined && hoverIndex !== undefined) {
      const { lists } = this.props;
      lists.splice(hoverIndex, 0, lists.splice(dragIndex, 1)[0]);
      this.props.changePosition(lists);
    }
  }

  render() {
    const lists = this.props.lists
      .map((e, idx) => <List
        key={idx}
        index={idx}
        moveCard={(a, b) => this.moveCard(a, b)}
        name={e.name}
        height={this.state.height}
        cards={e.cards}
      />);
    return (
      <div className="lists row-horizon">
        {lists}
        <ListNew
          onClick={() => this.newList()}
          onSave={list => this.saveNewList(list)}
          onCancel={() => this.onCancel()}
          adding={this.state.adding}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
