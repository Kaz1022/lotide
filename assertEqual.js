const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  }
  console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 12);