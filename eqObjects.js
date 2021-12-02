// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);

  if (array1.length !== array2.length) {return false};
  for (let key1 of array1) {
    for (let key2 of array2) {

      if (key1 === key2) {

        return true;
      } 
    }
    return false;
  }

};


module.exports = eqObjects;