// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
// Number of trailing zeros of N!
// 83015884% of 1,8634,259 of 15,917Ivan Diachenko3 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
// n!=n(n-1)...2·1.
// function zeros(n) {
//   // your code here
//   let nFactorial = 1;
//   for (let i = 1; i <= n; i++) {
//     nFactorial *= i;
//   }
//   let count = 0;
//   nFactorial = nFactorial.toString().split('');

//   for (let j = nFactorial.length - 1; j > 0; j--) {
//     if (parseInt(nFactorial[j]) === 0) {
//       count += 1;
//     } else {
//       break;
//     }
//   }
//   console.log('Output for: zeros -> nFactorial', count);
// }

//2.
function zeros(n) {
  // your code here
  var result = 0;
  for (var i = 5; i <= n; i += 5) {
    var num = i;
    while (num % 5 === 0) {
      num /= 5;
      result++;
    }
  }
  console.log('Output for: zeros -> result', result);
  return result;
}

zeros(1000);
