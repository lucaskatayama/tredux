import { combineReducers } from 'redux';
import lists from 'reducers/lists';

const rootReducer = combineReducers({
  lists,
});


export default rootReducer;
