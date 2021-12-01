const letterPositions = require('../letterPositions');

  const assertArraysEqual = require('../assertArraysEqual');

  const sentence = "lighthouse in the house";
// const firstNames = "Karl";
letterPositions(sentence);
assertArraysEqual(letterPositions("hello").e, [1]);