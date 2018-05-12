import * as React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import { Provider } from 'react-redux';
import createStore from './store-creator';

const store = createStore();
render(
  <Provider store={store}>
    <div className="react-root">Hello World!</div>
  </Provider>,
  document.getElementById('root')
);
