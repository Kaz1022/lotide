const middle = function(array) {
  let middleArr = [];
  const middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return middleArr;
  }

  if (array.length % 2 !== 0) {
    middleArr.push(array[middleIndex]);
  }

  if (array.length % 2 === 0) {
    middleArr.push(array[middleIndex -1], array[middleIndex]);
  }

  return middleArr;
};

module.exports = middle;
