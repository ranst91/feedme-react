import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import {createBrowserHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import routes from './shared/routes';
import rootReducer from "./reducers";
import { createStore } from 'redux';

import './index.css';
const browserHistory = createBrowserHistory();


// Add the reducer to your store on the `routing` key
const store = createStore(rootReducer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      {routes}
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
