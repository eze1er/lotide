const tail = function(array1) {
  let array2 = array1.slice(1);
  return array2;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return '✅✅✅✅';
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return '🛑🛑🛑🛑';
  }

};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!