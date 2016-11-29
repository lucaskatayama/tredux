import store from 'store';

const defaultState = store.get('lists') || [];

const add = (state, id, card) => {
  const newLists = state.map((list) => {
    if (list.id === id) {
      list.cards.push(card);
    }
    return list;
  });
  store.set('lists', newLists);
  return newLists;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LIST_CREATE_CARD': {
      const lists = add(state, action.payload.id, action.payload.card);
      return [...lists];
    }
    case 'LIST_REMOVED':
    case 'LIST_POSITION_CHANGED':
      return [...action.payload];
    case 'LIST_CREATED':
      return [...state, action.payload];
    default:
      return state;
  }
};
