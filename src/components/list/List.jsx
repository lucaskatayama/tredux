import React from 'react';
import Card from 'components/list/Card';


export default ({ name, height, cards }) => {
  const cardsList = cards && cards.length > 0 ? cards.map((e, idx) => <div className="box-body" style={{ maxHeight: height }}>
    <Card key={idx} description={e.description} />
  </div>) : '';
  return (
    <div className="col-md-3 list">
      <div className="box">
        <header className="box-header with-border">
          <span className="box-title">{name}</span>
        </header>
        {cardsList}
        <div className="box-footer">
          <button className="btn btn-sm btn-success">Add a card</button>
        </div>
      </div>
    </div>
  );
};
