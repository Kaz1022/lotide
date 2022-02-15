// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], ["Lighthouse", "Labs"][0]);
// assertEqual(result[1], ["Lighthouse", "Labs"][1]);
// assertEqual(result.length, 2);

// using mocha and chai
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns 'Labs' for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs']), ['Labs']);
  });
});