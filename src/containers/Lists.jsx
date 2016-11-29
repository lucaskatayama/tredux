import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from 'components/list/List';
import ListNew from 'components/board/ListNew';
import { newList } from 'actions/lists';


const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  createNewList: list => dispatch(newList(list)),
});

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

  render() {
    const lists = this.props.lists
      .map(e => <List
        key={e.id}
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
