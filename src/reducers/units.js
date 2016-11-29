import * as types from 'constants/ActionTypes';

export default (state = 'metric', action) => {
  switch (action.type) {
    case types.UNIT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
