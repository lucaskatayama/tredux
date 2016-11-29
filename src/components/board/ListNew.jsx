import React, { Component } from 'react';


class ListNew extends Component {
  onChange(e) {
    this.setState({ name: e.target.value });
  }

  onSave() {
    this.props.onSave({ name: this.state.name });
  }

  render() {
    const addingState = (
      <div className="box-body">
        <div className="box-title list-new">
          <input onChange={(e) => this.onChange(e)} className="form-control" type="text" placeholder="Name" style={{ marginBottom: '2px' }} />
          <button className="btn btn-success btn-sm" onClick={() => this.onSave()}>Save</button>
          {' '}
          <button className="btn btn-danger btn-sm" onClick={this.props.onCancel}>Cancel</button>
        </div>
      </div>
    );
    const AddNew = (
      <div className="box-body" onClick={this.props.onClick}>
        <div className="box-title list-new">
          Add a list
        </div>
      </div>
    );

    const add = this.props.adding ? addingState : AddNew;
    return (
      <div className="col-md-3">
        <div className="box box-solid">
          {add}
        </div>
      </div>
    );
  }
}

export default ListNew;
