
const countOnly = function(firstNames, itemsToCount) {
  let ii = 0;
  For (let first1 in firstNames){
    if (typeof allItems['itemsToCount'] === 'string') {
      ii++;

    }
  }
  console.log('ii: ',ii);
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return '✅✅✅✅';
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    console.assert(actual === expected, {actual: actual, expected: expected}, '🛑🛑🛑🛑');
    return '🛑🛑🛑🛑';
  }

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);