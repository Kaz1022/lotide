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
