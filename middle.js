const middle = function(array) {
  let array1 = [];
  if ((array.length === 1) || (array.length === 2)) {
    array1 = [];
  } else {
    let arr1 = Math.trunc((array.length - 1) / 2);
   
    if (array.length % 2 === 1) {
      array1.push(array[arr1]);
    } else {
      array1.push(array[arr1]);
      array1.push(array[arr1 + 1]);
    }
  }
  console.log('array1: ',array1);
  return array1;
};

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
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]