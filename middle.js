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
  return array1;
};

module.exports = middle;