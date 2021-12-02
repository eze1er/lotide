const assertEqual = require('./assertEqual');
const head = function(arr1) {
  let element1 = arr1[0];
  console.log('First element is '+ element1);
  return element1;
}; 

assertEqual(head(["Hello","Lighthouse","labs"]),"Hello");
module.exports = head;