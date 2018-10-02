import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import {createBrowserHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'

import routes from './shared/routes';
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";

const loggerMiddleware = createLogger();

const browserHistory = createBrowserHistory();


// Add the reducer to your store on the `routing` key
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/order" component={Order} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
