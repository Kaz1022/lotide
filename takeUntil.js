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

const takeUntil = function(array, callback) {
  const results = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    results.push(element);
  }
  return results;
};

const data1 = [1, 2, 3, -4, 5, 6, 7];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// assertArraysEqual(takeUntil(), []);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 3]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);