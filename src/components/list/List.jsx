import React from 'react';
import Card from 'components/list/Card';

const cards = [
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
  {
    description: 'lasndansd',
  },
];

export default ({ name }) => {
  const height = window.innerHeight - 250;
  return (
    <div className="col-md-3 list">
      <div className="box">
        <header className="box-header with-border">
          <span className="box-title">{name}</span>
        </header>
        <div className="box-body" style={{ height }}>
          {cards.map((e, idx) => <Card key={idx} description={e.description} />)}
        </div>
        <div className="box-footer">
          <button className="btn btn-sm btn-success">Add a card</button>
        </div>
      </div>
    </div>
  );
};
