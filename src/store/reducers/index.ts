import { combineReducers } from 'redux';

import fileReducer from 'store/reducers/fileReducer';

const rootReducer = combineReducers({
  file: fileReducer,
});

export default rootReducer;
