const palindromes = function (phrase) {

  // 1st eliminate spaces and symbols
  let lower = phrase.toLowerCase();
  let newPhrase = '';
  for (let char of lower) {
    if (char != ' ' && char != '.' && char != ',' && char != '!') {
      newPhrase += char;
    }
  }
  // Reverse phrase
  let reversed = newPhrase.split("").reverse().join("");

  // Compare both phrases
  if (newPhrase === reversed) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
