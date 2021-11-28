const without = function(array1, array2) {
  let parsedArray = [];
  let matchedItem;

  for (const element of array1) {
    matchedItem = false;
    for (const item of array2) {
      if (element === item) {
        matchedItem = true;
      }
    }
    if (matchedItem === false) {
      parsedArray.push(element);
    }
  }

  return parsedArray;
};

const eqArrays = function(array1, array2)  {
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
 
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);

  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);

  }

};


const words = ["hello", "world", "lighthouse", "bye"];
// // Make sure the original arr"ay was not altered by the without function
assertArraysEqual(without(words, ["world"]), ["hello", "lighthouse", "bye"]);
