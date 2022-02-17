const eqArrays = require('./eqArrays');

//Checking to see if object1 and object2 is the same.

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


module.exports = eqObjects;
