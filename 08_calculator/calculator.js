const add = function(summand1, summand2) {
	return summand1 + summand2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(...nums) {
	return nums[0] ? nums.reduce((accumulator, current) => accumulator + current) : 0;
};

const multiply = function(multiplier, ...multiplicands) {
  for (const multiplicand of multiplicands) {
    multiplier *= multiplicand;
  }
  return multiplier;
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
	let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
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
