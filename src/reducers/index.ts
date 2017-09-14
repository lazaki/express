import { combineReducers } from 'redux';
import data from './searchFormReducer';
import counts from './countReducer';
import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
  data,
  counts,
  ajaxStatus
});

export default rootReducer;
