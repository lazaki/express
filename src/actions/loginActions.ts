import * as types from './actionTypes';
import api from '../api/mockDataApi';


export function login(user) {
    return function (dispact) {
        dispact({type: types.LOGIN, user});
        return api.login(user).then(loginData=> {
            localStorage.setItem('logged', 'true');
            dispact({type: types.LOGIN_SUCCESS});
        }).catch(loginData => {
            dispact({type: types.LOGIN_FAIL});
        })
    }
}

export function logout() {
    return function (dispact) {
        dispact({type: types.LOGOUT});
        return api.logout().then(loginData=> {
            localStorage.setItem("logged","false");
            dispact({type: types.LOGOUT_SUCCESS,loginData});
        }).catch(loginData => {
            dispact({type: types.LOGOUT_FAIL});
        })
    }
}

export function checkUserIsLogedIn() {
    return function (dispact) {
        dispact({type: types.CHECKING_IS_USER_LOGED_IN});
        return api.checkUserIsLogedIn().then(loginData=> {
            dispact({type: types.USER_IS_LOGGED_IN,loginData});
        }).catch(loginData => {
            console.log(loginData)
            dispact({type: types.USER_IS_NOT_LOGGED_IN,loginData});
        })
    }
}


