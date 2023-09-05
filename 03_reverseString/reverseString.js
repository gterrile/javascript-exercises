const reverseString = function(phrase) {
  let reversed = ''
  for (i = (phrase.length - 1); i >= 0; i--) {
    reversed = reversed + phrase[i];
  }
  return reversed
};

// Do not edit below this line
module.exports = reverseString;
