const findKey = function(array, callback) {
  // // ...
  for (let key in array) {

    if (callback(array[key])) {
      return key;
    }
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return '✅✅✅✅';
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    console.assert(actual === expected, {actual: actual, expected: expected}, '🛑🛑🛑🛑');
    return '🛑🛑🛑🛑';
  }

};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
console.log('test1: ',test1);
assertEqual(test1, 'noma');

module.exports = findKey;
