import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from 'store/reducers/index';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, loggerMiddleware),
));

sagaMiddleware.run(rootSaga);

export default store;
