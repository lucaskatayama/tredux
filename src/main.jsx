import 'babel-polyfill';

import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/bootstrap/js/bootstrap.min';
import 'admin-lte/plugins/jQueryUI/jquery-ui.min';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll';

import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';
import 'admin-lte';

import 'styles/bootstrap-horizon.css';
import 'styles/main.css';



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import configureStore from 'store/configureStore';
import App from 'containers/App';
import Board from 'containers/Board';
import NotFound from 'components/NotFound';

const store = configureStore();


const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Board} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('main'),
);
