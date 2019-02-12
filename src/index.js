import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initialState from './store/initialState';
import configureStore from './store/configStore';
import App from './components/App';

import './index.css';

const store = configureStore(initialState);

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );

render(App);
if (module.hot) module.hot.accept('./components/App', () => render(App));
