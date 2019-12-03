// https://www.codewars.com/kata/first-non-repeating-character/train/javascript

// First non-repeating character
// 36410188% of 1,9596,283 of 15,402OverZealous4 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  // Add your code here

  for (let i = 0; i < s.length; i++) {
    let s1 = s.toLowerCase();
    if (s1.indexOf(s1[i]) == i && s1.indexOf(s1[i], i + 1) == -1) {
      return s[i];
    }
  }
  return '';
}

// other way
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], 'gi')).length === 1) {
      return s[i];
    }
  }
  return '';
}
