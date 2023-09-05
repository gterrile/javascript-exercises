const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	// let sum = 0;
  // array.forEach((element) => {
  //   sum += element;
  // });
  // return sum;

  const result = array.reduce((total, item) => {
    return total + item;
  }, 0);

  return result;
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item)
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(number) {
	let result = 1;
  if (number === 0) return 1;

  for (i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
