// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([4,5,6]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// using mocha and chai instead of our own assertEqual function.
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});