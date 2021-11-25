const without = function(array1, array2)  {
  let itemsToRemove = [];
  let source1 = [];
  let source2 = [];

  if (array1.length !== array2.length) {
    if (array1.length > array2.length) {
      for (let i = array2.length - 1; i < array1.length; i++) {
        itemsToRemove.push(array1[i]);
      }
    } else {
      for (let i = array1.length - 1; i < array2.length; i++) {
        itemsToRemove.push(array2[i]);
      }
    }
  } else {

    for (let i = 0; i < array1.length; i++) {
      // let arrayCompare = true;
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          itemsToRemove.push(array1[i]);
          itemsToRemove.push(array2[i]);
        } else {
          source1.push(array1[i]);
          source2.push(array2[i]);
        }
      }
    }
  }
  // console.log({source1, source2, itemsToRemove});
  return {source1, source2, itemsToRemove};
};

const assertArraysEqual = function(source1, source2) {
  console.log('source1 is '+ source1);
  console.log('source2 is '+ source2);
  if (without(source1, source2) === true) {
    console.log(`✅✅✅✅ Assertion Passed: [${source1}] === [${source2}]`);

  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${source1}] !== [${source2}]`);

  }

};


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false