import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListNew from 'components/board/ListNew';
import { newList, changePosition, remove } from 'actions/lists';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import List from './List';


const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  createNewList: list => dispatch(newList(list)),
  changePosition: list => dispatch(changePosition(list)),
  removeList: list => dispatch(remove(list)),
});

@DragDropContext(HTML5Backend)
class Lists extends Component {
  static propTypes = {
    lists: PropTypes.arrayOf(PropTypes.object),
    createNewList: PropTypes.func,
    changePosition: PropTypes.func,
    removeList: PropTypes.func,
  }

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

  onCancel() {
    this.setState({ adding: false });
  }

  newList() {
    this.setState({ adding: true });
  }

  saveNewList(list) {
    this.props.createNewList(list);
    this.setState({ adding: false });
  }

  removeList(idx) {
    const { lists } = this.props;
    lists.splice(idx, 1);
    this.props.removeList(lists);
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
        id={e.id}
        index={idx}
        remove={() => this.removeList(idx)}
        move={(a, b) => this.moveCard(a, b)}
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
