
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  const allItems1 = Object.values(allItems);
  for (const item of allItems1) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}



module.exports = countOnly;
