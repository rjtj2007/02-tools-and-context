'use strict';


const Fp = require('../lib/fp.js');

// .forEach
describe('Fp.forEach with null as arr', () => {
  let expected = [];
  it('it should return undefined', () => {
    let arr = null;
    let result = [];
    let cb = (something) => {
      return something * 2;
    }
    Fp.forEach(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toEqual(expected);
  })
});

// .map
describe('Fp.map with null entry for arr', () => {
  let expected = undefined;
  it('it should return undefined', () => {
    let arr = null;
    let cb = (something) => {
      return `New something: ${something + 1}`;
    }
    let result = Fp.map(arr, cb);
    expect(result).toEqual(expected);
  })
});

//.filter
describe('Fp.filter with empty arr', () => {
  let expected = undefined;
  it('it should return undefined', () => {
    let arr = [];
    let cb = (something) => {
      if (something > 2) {
        return true;
      } 
        return false;
    }
    let result = Fp.filter(arr, cb);
    expect(result).toEqual(expected);
  })
});

//.reduce
describe('Fp.reduce test arr with one item', () => {
  let expected = 1;
  it('it should return the same thing', () => {
    let arr = [1];
    let cb = (accumulator, something) => {
      return accumulator + something;
    }
    let result = Fp.reduce(arr, cb);
    expect(result).toBe(expected);
  })
});
