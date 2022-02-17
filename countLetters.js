// The function should take in a sentence (as a string) 
// return a count of each of the letters in that sentence.

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



