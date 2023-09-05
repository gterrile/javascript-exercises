const repeatString = function(word, times) {
  let phrase = '';
  for (i = 0; i < times; i++) {
    phrase = phrase + word
  }
  return phrase
};

// Do not edit below this line
module.exports = repeatString;
