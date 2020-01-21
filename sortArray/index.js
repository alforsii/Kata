// ************************************************************************************
// https://www.codewars.com/kata/array-dot-diff/train/javascript
// Your goal in this kata is to implement a difference function, which subtracts one list
// from another and returns the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]
// ************************************************************************************

////////1. one solution: ////////
// const array_dif = (someArr, aThing) => {
//   const updArr = [];
//   someArr.forEach(elem => (!aThing.includes(elem) ? updArr.push(elem) : null));
//   return updArr;
// };

////////2. another solution: with includes ////////
// const array_diff = (a, b) => {
//   return a.filter(elem => !b.includes(elem));
// };
////////3. another solution: with indexOf ////////
// function array_diff(a, b){
//   return a.filter(elem => b.indexOf(elem) == -1);
// };
////////4. another solution: with indexOf ////////
function array_diff(a, b) {
  b = new Set(b);
  return a.filter(v => !b.has(v));
}
// console.log(array_diff([1, 2, 2, 2, 3], [2]));
