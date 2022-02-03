const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  }
  console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(anObj, input) {
  let keys = Object.keys(anObj);
  for (const key of keys) {
    if (anObj[key] === input) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const furFriends = {
  cat: "Moon",
  dog: "Jet",
  bird: "Pilot",
  hamster: "Sushi"
};
assertEqual(findKeyByValue(furFriends, "Jet"), "dog");
assertEqual(findKeyByValue(furFriends, "Ruxpin"), undefined);
assertEqual(findKeyByValue(furFriends, "Sushi"), "hamster");