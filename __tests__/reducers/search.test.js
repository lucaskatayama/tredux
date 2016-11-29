import { expect } from 'chai';
import reducer from 'reducers/search';
import * as types from 'constants/ActionTypes';

describe('Weather Reducer', () => {
  it('should have weather as empty object on start state', () => {
    let b;
    const newState = reducer(b, { type: '' });
    expect(newState).to.be.eql({ loading: false, results: null });
  });
  it('should have weather updated on WEATHER_SEARCH_SUCCESS', () => {
    const state = {};
    const action = {
      type: types.WEATHER_SEARCH_SUCCESS,
      payload: {
        city: '123',
      },
    };
    const newState = reducer(state, action);
    expect(newState.loading).to.be.eql(false);
    expect(newState.results).to.be.eql({ city: '123' });
  });
});
