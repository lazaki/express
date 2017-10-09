import { combineReducers } from 'redux';
import data from './searchFormReducer';
import counts from './countReducer';
import ajaxStatus from './ajaxStatusReducer';
import technicalCharacteristic from './technicalCharacteristicReducer';
import place from './searchFormFilterReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  data,
  counts,
  ajaxStatus,
  technicalCharacteristic,
  place,
  loginReducer
});

export default rootReducer;
