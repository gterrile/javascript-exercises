const fibonacci = function(position) {
  let result = 0;
  
  // Start the sequence with 1, 1
  let last = 1;
  let lastSecond = 1;

  if (position <= 0) return 'OOPS';
  if (position == 1 || position == 2) return 1;
  
  for (i = 3; i <= position; i++) {
    result = lastSecond + last;
    lastSecond = last;
    last = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
