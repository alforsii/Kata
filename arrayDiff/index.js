// https://www.codewars.com/kata/array-dot-diff/train/javascript
// Array.diff
// 66212684% of 6,34520,584 of 49,089marcinbunsch3 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

//1. Solution - 1
function array_diff(a, b) {
  return a.filter(el => !b.includes(el)) || a;
}

//2. Solution - 2
function array_diff(a, b) {
  return a.filter(x => b.indexOf(x) == -1);
}
//3. Solution - 3
function array_diff(a, b) {
  b = new Set(b);
  return a.filter(val => !b.has(val));
}

// array_diff([1, 2, 2, 2, 3], [2]); //== [1,3]

// array_diff(
//   [18, -19, 7, -12, 1, -17, 11, 14, 1, 6],
//   [-17, 1, 7, 11, 6, 18, 14, -19, -12]
// );

// Should work for random arrays too - Expected: [], instead got: [7, 1, 1]
