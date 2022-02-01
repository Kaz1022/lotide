const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`👍👍👍Assertion Passed: [${actual}] === [${expected}]`);
  }
  console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
};

// assertArraysEqual("1,1,1", [1,1,1]);
// assertArraysEqual([1,1,1], [1,1,1]);
