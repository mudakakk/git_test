const convertToCelsius = function(temp1) {
  return +((temp1 - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function(temp) {
  return +((temp * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
