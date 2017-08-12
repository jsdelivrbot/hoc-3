import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';

import requireAuth from './components/require_authentication';
import history from './history';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <Switch>
        <Route path="/resources" component={ requireAuth(Resources) } />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.container'));
