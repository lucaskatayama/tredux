import { expect } from 'chai';
import * as types from 'constants/ActionTypes';
import { cities } from 'config';
import reducer from 'reducers/cities';

describe('Cities Reducer', () => {
  it('must start with config list of cities', () => {
    let state;
    const reduced = reducer(state, {});
    expect(reduced).to.be.eql(cities);
  });

  it('should add extra key data when a city is fetch', () => {
    const action = {
      type: types.CITY_FETCH_SUCCESS,
      payload: {
        id: 1816670,
        name: 'Beijing',
        temp: 36,
      },
    };
    let state;
    const reduced = reducer(state, action);
    expect(reduced).to.have.any.keys('1816670');
    expect(reduced['1816670']).to.have.all.keys(['id', 'name', 'temp']);
  });
});
