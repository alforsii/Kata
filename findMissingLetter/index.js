// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
// Find the missing letter
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata!

//1.
// function findMissingLetter(array) {
// let a_z = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   a_z = a_z.splice(a_z.indexOf(array[0]));
//   for (let i = 0; i < a_z.length; i++) {
//     if (a_z[i] !== array[i]) {
//       return a_z[i];
//     }
//   }
// }
//2.
// function findMissingLetter(array) {
//   for (let i = 0; i < array.length; i++) {
//     let letter = array[i].charCodeAt(0);
//     if (letter + 1 !== array[i + 1].charCodeAt(0)) {
//       return String.fromCharCode(letter + 1);
//     }
//   }
// }

//3.
function findMissingLetter(array) {
  let str = array.join('');
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code + 1 !== str.charCodeAt(i + 1)) {
      return String.fromCharCode(code + 1);
    }
  }
}

//4.
// const findMissingLetter = array => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
//     ''
//   );
//   const start = alphabet.indexOf(array[0]);
//   return alphabet
//     .slice(start, start + array.length)
//     .find(el => !array.includes(el));
// };

// findMissingLetter(); //"e"
// findMissingLetter(['a', 'b', 'c', 'd', 'f']); //"e"
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// findMissingLetter(['O', 'Q', 'R', 'S']); //"P"
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
