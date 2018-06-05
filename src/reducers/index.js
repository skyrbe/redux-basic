import { combineReducers } from 'redux';
import counterReducer from './counter';
import resultsReducer from './results';

const rootReducer = combineReducers({
  cnt : counterReducer,
  res : resultsReducer
});

export default rootReducer;
