'use strict';

const Fp = require('../lib/fp.js');

// .forEach
describe('Fp.forEach with null as array', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let result = undefined;
    let cb = (something) => {
      return;
    }
    Fp.forEach(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toBe(expected);
  })
});

describe('Fp.forEach with null entry for arr', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let cb = (something) => {
      return `New something: ${something + 1}`;
    }
    let result = Fp.forEach(arr, cb);
    expect(result).toBe(expected);
  })
});

describe('Fp.forEach test array with one item', () => {
  let expected = [2];
  test('it should return 2', () => {
    let arr = [1];
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
describe('Fp.map with null as array', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let result = undefined;
    let cb = (something) => {
      return;
    }
    Fp.map(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toBe(expected);
  })
});

describe('Fp.map with null entry for arr', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let cb = (something) => {
      return `New something: ${something + 1}`;
    }
    let result = Fp.map(arr, cb);
    expect(result).toBe(expected);
  })
});

describe('Fp.map test array with one item', () => {
  let expected = [2];
  test('it should return 2', () => {
    let arr = [1];
    let result = [];
    let cb = (something) => {
      return something * 2;
    }
    Fp.map(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toEqual(expected);
  })
});

//.filter
describe('Fp.map with null as array', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let result = undefined;
    let cb = (something) => {
      return;
    }
    Fp.map(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toBe(expected);
  })
});

describe('Fp.filter with null entry for arr', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let cb = (something) => {
      return `New something: ${something + 1}`;
    }
    let result = Fp.filter(arr, cb);
    expect(result).toBe(expected);
  })
});

describe('Fp.filter test array with one item', () => {
  let expected = [2];
  test('it should return 2', () => {
    let arr = [1];
    let result = [];
    let cb = (something) => {
      return something * 2;
    }
    Fp.filter(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toEqual(expected);
  })
});

//.reduce
describe('Fp.reduce with null as array', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let result = undefined;
    let cb = (something) => {
      return;
    }
    Fp.reduce(arr, (something) => {
      result.push(cb(something));
    });
    expect(result).toBe(expected);
  })
});

describe('Fp.reduce with null entry for arr', () => {
  let expected = undefined;
  test('it should return undefined', () => {
    let arr = null;
    let cb = (something) => {
      return `New something: ${something + 1}`;
    }
    let result = Fp.reduce(arr, cb);
    expect(result).toBe(expected);
  })
});

describe('Fp.reduce test array with one item', () => {
  let expected = 4;
  test('it should return the same thing', () => {
    let arr = [4];
    let cb = (accumulator, something) => {
      return accumulator + something;
    }
    let result = Fp.reduce(arr, cb);
    expect(result).toBe(expected);
  })
});
