const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  }
  console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};

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

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }


