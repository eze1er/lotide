// FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  let obj1 = Object.keys(actual);
  let obj2 = Object.keys(expected);
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅✅ Assertion Passed: [${obj1}] === [${obj2}]`);

  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${obj1}] !== [${obj2}]`);

  }

};

module.exports = assertObjectsEqual;
