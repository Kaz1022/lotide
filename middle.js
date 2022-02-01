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

const middle = function(array) {
  let middleArr = [];

  if (array.length >= 4 && array.length % 2 === 0) {
    middleArr.push(array[array.length / 2 - 1], array[array.length - array.length / 2]);
    return middleArr;
  }

  if (array.length >= 3 && array.length % 2 !== 0) {
    middleArr.push(array[Math.floor(array.length / 2)]);
  }
  return middleArr;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

