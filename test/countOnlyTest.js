const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

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

assertEqual(countOnly(result1["Jason"], 1));
assertEqual(countOnly(result1["Karima"], undefined));
assertEqual(countOnly(result1["Fang"], 2));
assertEqual(countOnly(result1["Agouhanna"], undefined));
