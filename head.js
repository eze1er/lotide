

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
//     return '✅✅✅✅';
//   } else {
//     console.log(`🛑🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
//     console.assert(actual === expected, {actual: actual, expected: expected}, '🛑🛑🛑🛑');
//     return '🛑🛑🛑🛑';
//   }

// };

const head = function(actual, expected) {
  let array1 = actual;
  const arr = actual.head(array1);
  console.log(`actual ==> ${arr}`);
  
}

head(head([5,6,7]), 5);
head(head(["Hello", "Lighthouse", "Labs"]), "Hello");

