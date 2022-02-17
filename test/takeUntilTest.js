const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [1, 2, 3] for  '[1, 2, 3, -4, 5, 6, 7], x => x < 0' ", () => {
    assert.equal = (takeUntil([1, 2, 3, -4, 5, 6, 7], x => x < 0), [1, 2, 3]);
  });

  it("returns ['I\'ve', 'been', 'to', 'Hollywood'] for  '['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to',],x => x === ','", () => {
    const data1 =  ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.equal = (takeUntil(data1, x => x < 0), ["I've", "been", "to", "Hollywood"]);
  });

});