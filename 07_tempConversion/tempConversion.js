const convertToCelsius = function(tempFahrenheit) {
  let tempCelcius = (tempFahrenheit - 32) * 5/9;
  let roundedCelcius = Math.round(tempCelcius * 10) / 10;
  return roundedCelcius;
};

const convertToFahrenheit = function(tempCelcius) {
  let tempFahrenheit = tempCelcius * 9/5 + 32;
  let roundedFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
