
const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


function eqArrays(array1, array2)  {

  if (array1.length !== array2.length) {
    console.log('false');
    return false;
  } else {
    let arrayCompare = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        arrayCompare = false;
      }

    }
    console.log(arrayCompare);
    return arrayCompare;
  
  }
 
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);

  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);

  }

};


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

const results1 = map(words, word => word[0]);
console.log(results1);