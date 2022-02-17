// The function takes in an object and a value. 
// It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(anObj, input) {
  let keys = Object.keys(anObj);
  for (const key of keys) {
    if (anObj[key] === input) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;