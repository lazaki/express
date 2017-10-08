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

  static getFuel(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/fuel/GetFuelForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getRepair(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/repair/GetRepairForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getBattery(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/battery/GetBatteryForVehicle//${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getTire(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/tire/GetTireForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getInsurance(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/insurance/GetInsuranceForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  
  static getWorkOrder(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/workorder/GetWorkOrderForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getExternal(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/external/GetExternalForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getOil(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/oil/GetOilForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getGlass(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/glass/GetGlassForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
      return response.json();
    })
  }

  static getPart(startDate,endDate,count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/part/GetPartForVehicle/${formatDate(startDate)}/${formatDate(endDate)}/${count}`).then((response) => {
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

  static getCounts() {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/vehicle/GetAllCount`).then((response) => {
      return response.json();
    })
  }

  static getTechnicalCharacteristics(count) {
    return fetch(`http://service.novogodisnjiukrasi.rs/api/vehicle/GetDetails/${count}`).then((response) => {
      return response.json();
    })
  }


}

export default DataApi;