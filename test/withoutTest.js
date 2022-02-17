const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns ['hello', 'world'] for without(words, ['lighthouse']))", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ['hello', 'world']);
  });

});