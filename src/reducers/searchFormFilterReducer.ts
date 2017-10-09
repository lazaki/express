import * as types from '../actions/actionTypes';

export default function filterByPlace(state="SV",action) {
  switch(action.type){
    case types.FILTER_DATA_BY_PLACE:
      return action.place;
    default:
      return state;
  }
}


