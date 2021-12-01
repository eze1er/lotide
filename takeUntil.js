const takeUntil = function(array, callback) {
  // ...
  // create new array
  let array1 = [];

  // loop through array
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      array1.push(array[i]);
    } else {
      return array1;
    }
  }
}


module.exports = takeUntil;