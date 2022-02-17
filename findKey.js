// takes in an object and a callback. 
// It should scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.


const findKey = function(objects, callback) {
  let keys = Object.keys(objects);
  for (const key of keys) {
    if (callback(objects[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
