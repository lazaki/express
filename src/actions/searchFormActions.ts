import { createAction } from 'redux-actions';
import * as types from './actionTypes';
//import api from '../api/mockDataApi';
import api from '../api/prodDataApi';
import {beginAjaxCall} from './ajaxSatusActions';
import {ajaxCallError} from './ajaxSatusActions';

import {  toast } from 'react-toastify';
require('react-toastify/dist/ReactToastify.min.css');

export function loadDataForDate(startDate,endDate) {
    return function(dispact){
        dispact(beginAjaxCall());
        return api.getDataForDate(startDate,endDate)
        .then( data =>{
            dispact(loadDataSuccess(data));
        })
        .catch(error=>{
            dispact(ajaxCallError(error));
        })
    }
}

export function loadExpenses(startDate,endDate,count) {
    return function(dispact){
        dispact(beginAjaxCall());
        return api.getAllExpenses(startDate,endDate,count)
        .then( data =>{
            dispact(loadDataSuccess(data));
        })
        .catch(error=>{
            dispact(ajaxCallError(error));
        })
    }
}


export function loadDataForCount(startDate,endDate,count,extense) {
    return function(dispact){
        dispact(beginAjaxCall());
        return api.getDataForCount(startDate,endDate,count,extense)
        .then( data =>{
            dispact(loadDataSuccess(data));
        })
        .catch(error=>{
            dispact(ajaxCallError(error));
        })
    }
}

export function loadCounts() {
    return function(dispact){
        dispact(beginAjaxCall());
        return api.getCounts().then( counts =>{
            dispact(loadCountsSuccess(counts));
        }).catch(error=>{
            dispact(ajaxCallError(error));
        })
    }
}

export function loadDataSuccess(data) {
    return { type: types.LOAD_DATA_SUCCESS, data }
}

export function loadCountsSuccess(counts) {
    return { type: types.LOAD_COUNTS_SUCCESS, counts }
}





