import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from 'components/list/List';


const mapStateToProps = () => ({
  lists: [
    'TODO',
    'DONE',
    'DONE',
    'DONE',
    'DONE',
    'DONE',
    'DONE',
    'DONE',
    'DONE',
  ],
});

class Lists extends Component {
  newList() {
    console.log('kanskdj');
  }
  render() {
    return (
      <div className="lists row-horizon">
        {this.props.lists.map((e, idx) => <List key={idx} name={e} />)}
        <div className="col-md-3">
          <div className="box box-solid box-default">
            <div className="box-header">
              <div className="box-title list-new" onClick={this.newList}>
                Add a list
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Lists);
