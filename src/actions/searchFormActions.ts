import { createAction } from 'redux-actions';
import * as types from './actionTypes';
//import api from '../api/mockDataApi';
import api from '../api/prodDataApi';
import { beginAjaxCall } from './ajaxSatusActions';
import { ajaxCallError } from './ajaxSatusActions';
import { ExpensesType } from './../constants/extensesTypes';

import { toast } from 'react-toastify';
require('react-toastify/dist/ReactToastify.min.css');






export function loadSearchData(startDate, endDate, count, extense) {
    return function (dispact) {
        dispact(beginAjaxCall());

        switch (Number(extense)) {
            case ExpensesType.Nalozi:
                return api.getWorkOrder(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Akumulatori:
                return api.getBattery(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Deo:
                return api.getPart(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Eksterni:
                return api.getExternal(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Gorivo:
                return api.getFuel(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Gume:
                return api.getTire(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Osiguranje:
                return api.getInsurance(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Remont:
                return api.getRepair(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Stakla:
                return api.getGlass(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })
            case ExpensesType.Ulje:
                return api.getOil(startDate, endDate, count)
                    .then(data => {
                        dispact(loadDataSuccess(data));
                    }).catch(error => {
                        dispact(ajaxCallError(error));
                    })

        }

    }
}

export function loadCounts() {
    return function (dispact) {
        dispact(beginAjaxCall());
        return api.getCounts().then(counts => {
            dispact(loadCountsSuccess(counts));
        }).catch(error => {
            dispact(ajaxCallError(error));
        })
    }
}

export function loadDataSuccess(data) {
    return { type: types.LOAD_DATA_SUCCESS, data }
}

export function loadTechnicalCharacteristicsSuccess(characteristic) {
    return { type: types.LOAD_TECHNICAL_CHARACTERISTIC_SUCCESS, characteristic }
}

export function loadCountsSuccess(counts) {
    return { type: types.LOAD_COUNTS_SUCCESS, counts }
}

export function loadTechnicalCharacteristics(count: number) {
    return function (dispact) {
        return api.getTechnicalCharacteristics(count)
            .then(characteristic => {
                dispact(loadTechnicalCharacteristicsSuccess(characteristic));
            }).catch(error => {
                dispact(ajaxCallError(error));
            })
    }
}





