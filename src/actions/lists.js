import * as api from 'utils/api';

export const newList = list => (dispatch) => {
  api.post('/lists', list).then((resp) => {
    dispatch({
      type: 'LIST_CREATED',
      payload: resp,
    });
  });
};
