import { combineReducers } from 'redux';
import app from 'reducers/app';
import search from 'reducers/search';
import units from 'reducers/units';
import cities from 'reducers/cities';

const rootReducer = combineReducers({
  app,
  search,
  units,
  cities,
});


export default rootReducer;
