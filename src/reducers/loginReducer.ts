import * as types from '../actions/actionTypes';


export default function loginReducer(state={ logged:false }, action) {
  console.log(action);
  switch(action.type){
    case types.LOGIN_SUCCESS:
      return {...state, logged:true};
    case types.USER_IS_LOGGED_IN:
      return {...state, logged:action.loginData.logged};
    case types.USER_IS_NOT_LOGGED_IN:
      return {...state, logged:action.loginData.logged};
    case types.LOGOUT_SUCCESS:
      return {...state, logged:action.loginData.logged};
    case types.LOGIN_SUCCESS:
      return {...state, logged:false};
    default:
      return state;
  }
}