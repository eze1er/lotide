function eqArrays(array1, array2) {

  if (array1.length !== array2.length) {
  
    return false;
  } else {
    let arrayCompare = true;
    for (let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) {
        arrayCompare = false;
        break;
      } 
    }
    return arrayCompare;
  }
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


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;