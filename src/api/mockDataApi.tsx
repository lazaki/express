import delay from './delay';
import data from './data';
import { ExpensesType } from '../constants/extensesTypes'
import { Places } from '../constants/places'
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function getRandomExpensesType(): string {
  var len = (Object.keys(ExpensesType).length / 2) - 1; // returns the length
  // calculate the random number
  var item = (Math.floor(Math.random() * len) + 0);
  return ExpensesType[item];
}

function getRadnomPlace(): string {
  var len = (Object.keys(Places).length / 2) - 1; // returns the length
  // calculate the random number
  var item = (Math.floor(Math.random() * len) + 0);
  return Places[item];
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

class DataApi {

  static login(user) {
      return new Promise((resolve, reject) => {
        if(user.username==="pretraga"){
          if(user.password ==="pretr@ga1234."){
            setTimeout(() => {
              resolve(Object.assign({}, {logged:true}));
            }, delay);
          }else {
            setTimeout(() => {
              reject(Object.assign({}, {error:"Password"}));
            }, delay);
          }
        }else {
          setTimeout(() => {
            reject(Object.assign({}, {error:"UserName"}));
          }, delay);
        }
      });
    }

    static logout() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Object.assign({}, {logged:false}));
          }, delay);
      });
    }

    static checkUserIsLogedIn() {
      const loggedIn = localStorage.getItem("logged");
      return new Promise((resolve, reject) => {
        if(loggedIn==="true"){
          setTimeout(() => {
            resolve(Object.assign({}, {logged:loggedIn}));
          }, 0);
        }else {
          setTimeout(() => {
            reject(Object.assign({}, {logged:false}));
          }, 0);
        }
      });
    }

  static getDataForDate(startDate, endDate) {
    var start = new Date(startDate).getTime();
    var end = new Date(endDate).getTime();
    let defaultData = data.map(d => {
      return {
        ExpensesType: getRandomExpensesType(),
        Count: Math.floor((Math.random() * 500) + 1),
        Quantaty: d.Quantaty,
        Price: d.Price,
        Date: randomDate(new Date(2012, 0, 1), new Date()).toISOString(),
        TachographState: Math.floor((Math.random() * 1000000) + 50),
        Place: getRadnomPlace()
      }
    }).filter(item => {
      if (start < new Date(item.Date).getTime() && end > new Date(item.Date).getTime()) return item;
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], defaultData));
      }, delay);
    });
  }

  static getCounts() {
    let defaultData = data.map((item, index) => {
      return Math.floor((Math.random() * 500) + 1).toString()
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], defaultData));
      }, delay);
    });
  }


}

export default DataApi;