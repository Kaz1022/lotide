const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns [1] to locate 'e' for 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  });

  it("returns [0] to locate 'l' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").l, [0])
  });

  it("returns [1, 11] to locate 'i' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11])
  });

  it("returns [2] to locate 'g' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").g, [2])
  });

  it("returns [3, 5, 15, 18] to locate 'h' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18])
  });

  it("returns [4, 14] to locate 't' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").t, [4, 14])
  });

  it("returns [6, 19] to locate 'o' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").o, [6, 19])
  });

  it("returns [7, 20] to locate 'u' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").u, [7, 20])
  });

  it("returns [8,21] to locate 's' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").s, [8, 21])
  });

  it("returns [9, 16, 22] to locate 'e' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9, 16, 22])
  });

  it("returns [12] to locate 'e' for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").n, [12])
  });

});
