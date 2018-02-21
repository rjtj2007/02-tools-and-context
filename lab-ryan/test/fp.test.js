'use strict';


const Fp = require('../lib/fp.js');

// .forEach
describe(' Fp.forEach with null as array', () => {
  let expected = [];
  it('it should return undefined', () => {
    let arr = null;
    let result = [];
    let cb = (something) => {
      return something * 2;
    }
    Fp.forEach(array, (something) => {
      result.push(cb(something));
    });
    expect(result).toEqual(expected);
  })
});