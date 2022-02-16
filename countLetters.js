const countLetters = function(strings) {
  let noSpaceStr = strings.split(" ").join("");
  let counts = {};
  for (const s of noSpaceStr) {
    if (counts[s]) {
      counts[s]++;
    }
    if (!counts[s]) {
      counts[s] = 1;
    }
  }
  return counts;
};

module.exports = countLetters;



