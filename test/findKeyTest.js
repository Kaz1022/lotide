const assert = require('chai').assert;
const findKey = require('../findKey');


describe("#findKey", () => {
  const starPeople = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };

  const users = {
    'barney': { 'age': 36, 'active': true },
    'fred': { 'age': 40, 'active': false },
    'pebbles': { 'age': 1, 'active': true }
  };

  it("returns 'noma' for  'x => x.stars === 2' ", () => {
    assert.equal = (findKey(starPeople, x => x.stars === 2), "noma");
  });

  it("returns 'pebbles' for x => x.age === 1 ", () => {
    assert.equal = (findKey(users, x => x.age === 1), "pebbles");
  });

  it("returns 'fred' for x => x.active === false ", () => {
    assert.equal = (findKey(users, x => x.active === false), "pebbles");
  });

});
