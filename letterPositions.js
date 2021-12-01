
 const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

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
  return results;
};

module.exports = letterPositions;
