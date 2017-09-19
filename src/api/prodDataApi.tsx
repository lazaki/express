import delay from './delay';
import data from './data';
import { ExpensesType } from '../constants/extensesTypes'
import { Places } from '../constants/places'
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function formatDate(date) {
  var d = date,
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

class DataApi {

  static getDataForDate(startDate, endDate) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/expense/GetExpenseForVehicle/2016-01-01/2016-06-30/3/253`).then((response) => {
      return response.json();
    })
  }

  static getWorkOrderForVehicle(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/workorder/GetWorkOrderForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getAllExpenses(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/expense/GetAllExpensesForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getDataForCount(startDate, endDate, count, extense) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/expense/GetExpenseForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${extense}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getCounts() {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/vehicle/getallcount`).then((response) => {
      return response.json();
    })
  }

}

export default DataApi;