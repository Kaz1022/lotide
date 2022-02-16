const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const animals = ["dogs", "cats", "raptors"];
  const names = ["Sean", "Jessica", "Kasey", "Brandon", "Will"];

  it("returns ['g','c','t','m','t'] to locate word[0] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  it("returns ['d','c','r'] to locate word[0] for ['dogs', 'cats', 'raptors']", () => {
    assert.deepEqual(map(animals, word => word[0]), ["d", "c", "r"]);
  });

  it("returns ['S','J','K', 'B', 'W'] to locate word[0] for ['Sean', 'Jessica', 'Kasey', 'Brandon', 'Will']", () => {
    assert.deepEqual(map(names, word => word[0]), ['S','J','K', 'B', 'W']);
  });

});
