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

 module.exports = without;