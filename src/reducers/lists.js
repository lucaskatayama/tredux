import store from 'store';

const defaultState = store.get('lists') || [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LIST_POSITION_CHANGED':
      return [...action.payload];
    case 'LIST_CREATED':
      return [...state, action.payload];
    default:
      return state;
  }
};
