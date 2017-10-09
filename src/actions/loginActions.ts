import * as types from './actionTypes';
import api from '../api/mockDataApi';


export function login(user) {
    return {type: types.LOGIN, user}
}

export function loginToSystem(user) {
    return function (dispact) {
        dispact(login(user));
        return api.login(user).then(loginData=> {
            dispact({type: types.LOGIN_SUCCESS,loginData});
        }).catch(loginData => {
            dispact({type: types.LOGIN_FAIL,loginData});
        })
    }
}


