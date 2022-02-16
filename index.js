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
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects: eqObjects,
  eqArrays: eqArrays;
  countletters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue = findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  head:   head,
  tail:   tail,
  middle: middle,
  map: map,
  takeUntil: takeUntil,
  without: without  
};