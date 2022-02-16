const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  const furFriends = {
    cat: "Moon",
    dog: "Jet",
    bird: "Pilot",
    hamster: "Sushi"
  };

  it("returns 'drama' for 'The Wire'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'dog' for 'Jet'", () => {
    assert.equal(findKeyByValue(furFriends, "Jet"), "dog");
  });

  it("returns undefined for 'Ruxpin'", () => {
    assert.equal(findKeyByValue(furFriends, undefined), undefined);
  });

  it("returns 'hamster' for 'Sushi'", () => {
    assert.equal(findKeyByValue(furFriends, "Sushi"), "hamster");
  });

});

