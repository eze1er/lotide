  const assertArraysEqual = require('./assertArraysEqual');
 const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  console.log(sentence.length);
  for (const elem of sentence) {
    if (elem !== ' ') {

    let position = [];
    for (let i = 0; i < sentence.length; i++) {
      if (elem === sentence[i]) {
        position.push(i);
      }
    }
    results[elem] = position;
  
    }
  }
  console.log(results);
  return results;
};

const sentence = "lighthouse in the house";
// const firstNames = "Karl";
letterPositions(sentence);
assertArraysEqual(letterPositions("hello").e, [1]);
