// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const findkey = require('./findkey');
const findKeyByValue = require('./');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  findkey: findkey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  without: without
};