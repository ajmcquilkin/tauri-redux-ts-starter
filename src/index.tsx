/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import store from 'store';

import './index.scss';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
