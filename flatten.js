// It takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(array) {
  let finalArr = [];
 
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      finalArr.push(array[i]);
    } else if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        finalArr.push(array[i][j]);
      }
    }
  }
  return finalArr;
};

module.exports = flatten;

