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

const eqObjects = function(object1, object2) {
  //if the object length is different, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  let keyArr = Object.keys(object1);
  for (const key of keyArr) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`👍👍👍Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
  console.log(`❌❌❌Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1"});