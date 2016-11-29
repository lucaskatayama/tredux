import { cities } from 'config';
import * as types from 'constants/ActionTypes';

export default (state = cities, action) => {
  switch (action.type) {
    case types.CITY_FETCH_SUCCESS: {
      const id = action.payload.id;
      return {
        ...state,
        [id]: action.payload,
      };
    }
    default:
      return state;
  }
};
