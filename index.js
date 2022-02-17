const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

//implement property value shorthand syntax from ES6
module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqObjects,
  eqArrays,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  head,
  tail,
  middle,
  map,
  takeUntil,
  without
};