import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import nock from 'nock';
import { endpoint } from 'config';
import { search } from 'actions/search';
import json from './ow.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Weather Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should dispatch PENDING and SUCCESS actions', () => {
    const q = 'Campinas';
    nock(endpoint)
      .get('/weather')
      .query(query => query.q === q)
      .reply(200, json);
    const store = mockStore({ search: {} });
    const actions = [
      { type: 'WEATHER_SEARCH_PENDING' },
      { type: 'WEATHER_SEARCH_SUCCESS',
        payload: {
          description: 'clear sky',
          icon: '01n',
          country: 'BR',
          temp: 289.15,
          temp_max: 289.15,
          temp_min: 289.15,
          pressure: 1015,
          humidity: 77,
          name: 'Campinas',
          id: 3467865,
        } },
    ];
    return store.dispatch(search(q))
      .then(() => {
        const storeActions = store.getActions();
        expect(storeActions).to.be.eql(actions);
      });
  });

  it('should dispatch ERROR when no {q} is provided', () => {
    const store = mockStore({ search: {} });
    const actions = [
      { type: 'WEATHER_SEARCH_ERROR', payload: 'No city provided!' },
    ];
    let b;
    store.dispatch(search(b));
    const storeActions = store.getActions();
    expect(storeActions).to.be.eql(actions);
  });
  it('should dispatch ERROR when {q} is empty', () => {
    const store = mockStore({ search: {} });
    const actions = [
      { type: 'WEATHER_SEARCH_ERROR', payload: 'No city provided!' },
    ];
    store.dispatch(search(''));
    const storeActions = store.getActions();
    expect(storeActions).to.be.eql(actions);
  });
});
