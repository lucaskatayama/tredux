import * as api from 'utils/api';
import store from 'store';

export const changePosition = (list) => {
  store.set('lists', list);
  return {
    type: 'LIST_POSITION_CHANGED',
    payload: list,
  };
};

export const newList = list => (dispatch) => {
  api.post('/lists', list).then((resp) => {
    dispatch({
      type: 'LIST_CREATED',
      payload: resp,
    });
  });
};

export const createCard = (id, card) => ({
  type: 'LIST_CREATE_CARD',
  payload: {
    id,
    card,
  },
});


export const remove = (list) => {
  store.set('lists', list);
  return {
    type: 'LIST_REMOVED',
    payload: list,
  };
};
