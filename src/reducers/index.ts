import { combineReducers } from 'redux';
import data from './searchFormReducer';
import counts from './countReducer';

const rootReducer = combineReducers({
  data,
  counts
});

export default rootReducer;
