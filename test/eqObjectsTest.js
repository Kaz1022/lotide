const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const actual = eqObjects(cd, dc);
    const expected = true;
    assert.equal(actual, expected);
  });

  it("returns false for  { c: '1', d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const actual = eqObjects(cd, cd2);
    const expected = false;
    assert.equal(actual, expected);
  });

  //shortend the above
  it("returns true for  { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    assert.equal(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), true);
  });

  it("returns false for  { a: '1', b: '2' } and { a: '1', b: '2', c: '3' }", () => {
    assert.equal(eqObjects({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' }), false);
  });


});

