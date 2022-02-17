const eqObjects = require('./eqObjects');

//Checking to see if your actual object output and the expected output is the same.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`👍👍👍Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
  console.log(`❌❌❌Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};

// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1"});

module.exports = assertObjectsEqual;