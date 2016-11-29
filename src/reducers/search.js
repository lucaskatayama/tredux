import * as types from 'constants/ActionTypes';

const defaultState = {
  loading: false,
  results: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.WEATHER_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case types.WEATHER_SEARCH_PENDING:
      return {
        ...state,
        results: null,
        loading: true,
      };
    default:
      return state;
  }
};
