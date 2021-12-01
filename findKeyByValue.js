
const findKeyByValue = function(object, valueInput) {

  for (const [key, value] of Object.entries(object)) {
    if (value === valueInput) {
      return key;
    }
}
  return undefined;
};

module.exports = findKeyByValue;