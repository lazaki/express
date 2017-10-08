import { handleActions } from 'redux-actions';
import * as types from '../actions/actionTypes';

export default function technicalCharacteristic(state=[], action) {
  switch(action.type){
    case types.LOAD_TECHNICAL_CHARACTERISTIC_SUCCESS:
      return action.characteristic;
    default:
      return state;
  }
}


