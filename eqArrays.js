function eqArrays(array1, array2) {

  if (array1.length !== array2.length) {
    console.log('false');
    return false;
  } else {
    let arrayCompare = true;
    for (let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) {
        arrayCompare = false;
        break;
        // console.log('false');
        // return false;
      } 

    }
    console.log(arrayCompare);
    return arrayCompare;
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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS