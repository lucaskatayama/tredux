import * as types from 'constants/ActionTypes';
import api from 'utils/api';

export const getCard = (id) => dispatch => {
  api.get(id).then(data => dispatch({
    type: types.CARD_GET,
    payload: data,
  }));
};
