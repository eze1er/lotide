const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let result1 = findKeyByValue(bestTVShowsByGenre, "The Wire")
assertEqual(result1, "drama");

let result2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show")
assertEqual(result2, undefined);
