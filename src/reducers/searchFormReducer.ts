import { handleActions } from 'redux-actions';
import * as types from '../actions/actionTypes';

export default function searchReducer(state=[], action) {
  console.log(action);
  switch(action.type){
    case 'LOAD_DATA_SUCCESS':
      return action.data;
    default:
      return state;
  }
}


