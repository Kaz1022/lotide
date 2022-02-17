// This function will return a subset of a given array, removing unwanted elements. It returns a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  let itemsToKeep = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      itemsToKeep.push(source[i]);
    }
  }
  return itemsToKeep;
};

module.exports = without;

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
// assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);




