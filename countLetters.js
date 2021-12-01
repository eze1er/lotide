
const countLetters = function(firstNames) {
  let array = firstNames;
  let object = {};

  for (const elem of array) {
    if (elem !== ' ') {
      let counter = 0;
      for (let i = 0; i < array.length; i++) {
        if (elem === array[i]) {
          counter++;
        }
      }
      object[elem] = counter;
      
    }
    
  }
  return object;
};

module.exports = countLetters;