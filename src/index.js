import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app';
import reducers from './reducers';

/* const createStoreWithMiddleware = applyMiddleware()(createStore); */

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
/*  <Provider store={createStoreWithMiddleware(reducers)}> */
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
