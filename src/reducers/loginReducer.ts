import * as types from '../actions/actionTypes';


export default function loginReducer(state={ loggedIn:false,accessToken:""}, action) {
  switch(action.type){
    case types.LOGIN_SUCCESS:
      return action.loginData;
    case types.LOGIN_SUCCESS:
      return action.loginData;
    default:
      return state;
  }
}