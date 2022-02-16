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