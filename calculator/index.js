// Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

const Calculator = function () {
  this.evaluate = (string) => {
    // do code here

    const result = string
      .split('+')
      .map((el) =>
        el.includes('-')
          ? el
              .split('-')
              .map((elem) => mulOrDiv(elem))
              .reduce((acc, val) => Number(acc) - Number(val))
          : el.split('-').map((elem) => mulOrDiv(elem))
      )
      .reduce((acc, val) => Number(acc) + Number(val));
    console.log('-> result', result);
    return result;
  };
  return this;
};

function mulOrDiv(string) {
  if (string.includes('/')) {
    return string.split('/').reduce((acc, val) => Number(acc) / Number(val));
  } else if (string.includes('*')) {
    return string.split('*').reduce((acc, val) => Number(acc) * Number(val));
  } else {
    return Number(string);
  }
}

Calculator().evaluate('2 / 2 + 3 * 4 - 6'); // 7
