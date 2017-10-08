import { combineReducers } from 'redux';
import data from './searchFormReducer';
import counts from './countReducer';
import ajaxStatus from './ajaxStatusReducer';
import technicalCharacteristic from './technicalCharacteristicReducer';

const rootReducer = combineReducers({
  data,
  counts,
  ajaxStatus,
  technicalCharacteristic
});

export default rootReducer;
