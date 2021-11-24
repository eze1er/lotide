
const head = function(arr1) {
  let element1 = arr1[0];
  console.log('First element is '+ element1);
  return element1;
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


  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


