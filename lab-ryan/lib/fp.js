'use strict';

// do not use third party libraries

const Fp = {};

//.forEach
Fp.forEach = (arr, cb) => {
  if (arr === null || arr.length === 0) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
  return undefined;
}

//.map
Fp.map = (arr, cb) => {
  if (arr === null || arr.length === 0) {
    return undefined;
  } else {
    let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(cb(arr[i]));
  }
  return newarr;
  }
} 

//.filter
Fp.filter = (arr, cb) => {
  if (arr === null || arr.length === 0) {
    return undefined;
  } else {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let something = cb(arr[i])
    if (something) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
  }
} 

//.reduce
Fp.reduce = (arr, cb, initialState) => {
  let reduced = 0;
  if (initialState) {
    reduced = initialState;
  }
  if (arr === null) {
    return undefined;
  } else if (arr.length === 0){
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      reduced = cb(reduced, arr[i]);
    }    
  }
  return reduced;
} 

module.exports = Fp;