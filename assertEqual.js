const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅✅ Assertion Passed: [' + actual + '] === [' + expected + ']');
    return '✅✅✅✅';
  } else {
    // console.log('🛑🛑🛑🛑 Assertion Failed: [' + actual + '] !== [' + expected + ']');
    console.assert(actual === expected, {actual: actual, expected: expected}, '🛑🛑🛑🛑');
    return '🛑🛑🛑🛑';
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
