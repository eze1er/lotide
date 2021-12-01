const without = require('../without');

const assertArraysEqual = require('../assertArraysEqual');

const eqArrays = require('../eqArrays');

const words = ["hello", "world", "lighthouse", "bye"];
// // Make sure the original arr"ay was not altered by the without function
assertArraysEqual(without(words, ["world"]), ["hello", "lighthouse", "bye"]);
