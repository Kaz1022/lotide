//Checking to see if your array output and the expected array output is the same.

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual("1,1,1", [1,1,1]);
assertArraysEqual([1,1,1], [1,1,1]);