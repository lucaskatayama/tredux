import React, { PropTypes, Component } from 'react';
import Card from 'components/list/Card';
import FontAwesome from 'react-fontawesome';

class CardForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  add() {
    if (this.state.value) {
      this.props.onAdd({
        description: this.state.value,
      });
      this.setState({ value: '' });
    }
  }
  render() {
    const { onAdd, onCancel } = this.props;
    return (
      <div>
        <input className="form-control" onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
        <button className="btn btn-sm btn-success" onClick={() => this.add()}>
          Add
        </button>
        <button className="btn btn-sm btn-danger" onClick={onCancel}>
          Cancel
        </button>
      </div>
    );
  }
}

const AddButton = props => (
  <button className="btn btn-sm btn-success" onClick={props.addCard}>
    <FontAwesome name="plus" />
    {' '} Add a card
  </button>
);

const List = (props) => {
  const { name, height, cards = [], isOver } = props;
  const cardAddForm = props.addingCard
    ? <CardForm onCancel={props.onCancel} onAdd={props.onAdd} />
    : <AddButton addCard={props.addCard} />;

  const body = cards && cards.length > 0
    ? (<div className="box-body" style={{ maxHeight: height }}>
        {
          cards.map((e, idx) =>
            <Card key={idx} description={e.description} />)
        }
      </div>)
    : '';
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
        {body}
        <div className="box-footer">
          {cardAddForm}
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
  addCard: PropTypes.func,
  addingCard: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default List;
