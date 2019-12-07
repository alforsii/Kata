// https://www.codewars.com/kata/simple-pig-latin/train/javascript
// Simple Pig Latin
// 58416284% of 4,00415,966 of 35,926user25058765 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  //Code here
  let strArr = str.split(' ');
  let addLetters = 'ay';
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let newWord = strArr[i];
    if (strArr[i] !== '!' && strArr[i] !== '?') {
      let word = strArr[i].split('');
      newWord = word.splice(1).join('') + word[0] + addLetters;
    }
    newArr.push(newWord);
  }
  console.log('Output for: pigIt -> strArr', newArr.join(' '));
  return newArr.join(' ');
}
// Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
pigIt('Quis custodiet ipsos custodes ?');

// You should 'pig' "Quis custodiet ipsos custodes ?" - Expected: 'uisQay ustodietcay psosiay ustodescay ?', instead got: 'uisQay ustodietcay psosiay ustodescay ?ay'
