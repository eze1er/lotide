const findKey = function(array, callback) {
  // // ...
  for (let key in array) {

    if (callback(array[key])) {
      return key;
    }
  }
};


module.exports = findKey;
