import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

/* const createStoreWithMiddleware = applyMiddleware()(createStore); */

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
/*  <Provider store={createStoreWithMiddleware(reducers)}> */
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));


/* Component + Higher Order Component = "Enhanced" or "Composed" Component */
