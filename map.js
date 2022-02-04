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

const words = ["ground", "control", "to", "major", "tom"];
const animals = ["dogs", "cats", "raptors"];
const names = ["Sean", "Jessica", "Kasey", "Brandon", "Will"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(array, callback), []);
assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
assertArraysEqual(map(animals, word => word[0]), ["d", "c", "r"]);
assertArraysEqual(map(names, word => word[0]), ["S", "J", "K", "B", "W"]);
