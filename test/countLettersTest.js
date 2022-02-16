const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  
  const result1 = countLetters("lighthouse in the house");

  it("returns 1 for 'l'", () => {
    assert.equal(result1["l"], 1);
  });

  it("returns 2 for 'i'", () => {
    assert.equal(result1['i'], 2)
  });

  it("returns 1 for 'g'", () => {
    assert.equal(result1.g, 1)
  });

  it("returns 4 for 'h'", () => {
    assert.equal(result1.h, 4)
  });

  it("returns 4 for 'h'", () => {
    assert.equal(result1.t, 2)
  });

  it("returns 2 for 't'", () => {
    assert.equal(result1.t, 2)
  });

  it("returns 2 for 'o'", () => {
    assert.equal(result1.o, 2)
  });

  it("returns 2 for 'u", () => {
    assert.equal(result1.u, 2)
  });

  it("returns 2 for 's'", () => {
    assert.equal(result1.s, 2)
  });

  it("returns 3 for 'e'", () => {
    assert.equal(result1.e, 3)
  });

  it("returns 1 for 'n'", () => {
    assert.equal(result1.n, 1)
  });
});



// const result1 = countLetters("lighthouse in the house");

// assertEqual(result1["l"], 1);
// assertEqual(result1["i"], 2);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 4);
// assertEqual(result1["t"], 2);
// assertEqual(result1["o"], 2);
// assertEqual(result1["u"], 2);
// assertEqual(result1["s"], 2);
// assertEqual(result1["e"], 3);
// assertEqual(result1["n"], 1);


// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }