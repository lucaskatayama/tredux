import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class ListNew extends Component {
  onChange(e) {
    this.setState({ name: e.target.value });
  }

  onSave() {
    this.props.onSave({ name: this.state.name });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSave();
    }
  }

  render() {
    const addingState = (
      <div className="box-body">
        <div className="box-title list-new">
          <input onKeyPress={(e) => this.onKeyPress(e)} onChange={(e) => this.onChange(e)} className="form-control" autoFocus type="text" placeholder="Name" style={{ marginBottom: '2px' }} />
          <button className="btn btn-success btn-sm" onClick={() => this.onSave()}>Save</button>
          {' '}
          <button className="btn btn-danger btn-sm" onClick={this.props.onCancel}>Cancel</button>
        </div>
      </div>
    );
    const AddNew = (
      <div className="box-body" onClick={this.props.onClick}>
        <div className="box-title list-new">
          <FontAwesome name="plus" />{' '}
          Add a list
        </div>
      </div>
    );

    const add = this.props.adding ? addingState : AddNew;
    return (
      <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <div className="box box-default">
          {add}
        </div>
      </div>
    );
  }
}

export default ListNew;
