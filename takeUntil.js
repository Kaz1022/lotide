// This function will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    results.push(element);
  }
  return results;
};

module.exports = takeUntil;