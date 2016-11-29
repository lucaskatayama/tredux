import * as types from 'constants/ActionTypes';

export const changeUnits = type => ({
  type: types.UNIT_CHANGE,
  payload: type,
});
