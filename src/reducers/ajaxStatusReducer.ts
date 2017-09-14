import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

function actionTypeEndInError(type) {
    return type.substring(type.length - 6) == '_ERROR';
}

export default function ajaxStatusReducer(state=initialState.ajaxCallInProgress, action) {
    if(action.type == 'BEGIN_AJAX_CALL') {
        return { status: "LOADING", message: "Loading" }
    }else if(actionTypeEndInSuccess(action.type)){
        return { status: "SUCCESS", message: "SUCCESS" };
    }else if(actionTypeEndInError(action.type)){
        return { status: "ERROR", message: action.error }
    }
    return state;
}