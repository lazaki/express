import { handleActions } from 'redux-actions';
import * as types from '../actions/actionTypes';

export default function countsReducer(state=[], action) {
  console.log(action);
  switch(action.type){
    case 'LOAD_COUNTS_SUCCESS':
      return action.counts;
    default:
      return state;
  }
}


