var removeFromArray = function(myArray, ...args) {
  return myArray.filter(aux => !args.includes(aux))
};

// Do not edit below this line
module.exports = removeFromArray;
