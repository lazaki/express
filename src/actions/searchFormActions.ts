import { createAction } from 'redux-actions';
import * as types from './actionTypes';
//import api from '../api/mockDataApi';
import api from '../api/prodDataApi';


export function loadDataForDate(startDate,endDate) {
    return function(dispact){
        return api.getDataForDate(startDate,endDate).then( data =>{
            dispact(loadDataSuccess(data));
        }).catch(error=>{
            throw(error);
        })
    }
}


export function loadDataForCount(startDate,endDate,count,extense) {
    return function(dispact){
        return api.getDataForCount(startDate,endDate,count,extense).then( data =>{
            dispact(loadDataSuccess(data));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function loadCounts() {
    return function(dispact){
        return api.getCounts().then( counts =>{
            dispact(loadCountsSuccess(counts));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function loadDataSuccess(data) {
    return { type: types.LOAD_DATA_SUCCESS, data }
}

export function loadCountsSuccess(counts) {
    return { type: types.LOAD_COUNTS_SUCCESS, counts }
}



