//https://www.codewars.com/kata/persistent-bugger
// Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number\\

function persistence(num) {
  //code me
  let count = 0;
  while (num > 9) {
    let arr = num.toString().split('');
    let total = arr.reduce((acc, val) => acc * val, 1);
    num = total;
    count++;
  }
  console.log(count);
  return count;
}
persistence(999);
persistence(39);
persistence(4);

//2. Solution -2
let persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
};

//3.Best practice
persistence = num => {
  let counter = 0;
  num = num.toString();
  while (num.length > 1) {
    counter++;
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return counter;
};
