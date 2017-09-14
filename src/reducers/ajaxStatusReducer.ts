import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state=initialState.ajaxCallInProgress, action) {
    if(action.type == 'BEGIN_AJAX_CALL') {
        return true;
    }else if(actionTypeEndInSuccess(action.type)){
        return false;
    }
    return state;
}