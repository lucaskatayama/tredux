import 'isomorphic-fetch';
import * as types from 'constants/ActionTypes';
import * as ow from 'utils/openweather';

export const search = (q, units = 'metric') => (dispatch) => {
  if (!q) {
    dispatch({ type: types.WEATHER_SEARCH_ERROR, payload: 'No city provided!' });
    return null;
  }
  dispatch({ type: types.WEATHER_SEARCH_PENDING });
  return ow.get('weather', { q, units })
        .then(json => dispatch({ type: types.WEATHER_SEARCH_SUCCESS, payload: json }))
        .catch(err => dispatch({ type: types.WEATHER_SEARCH_ERROR, payload: err }));
};
