// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

// Merged String Checker
// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, part1, part2) {
  let oneS = part1.split('');
  let secS = part2.split('');
  let joinedWord = oneS.map((el, i) => (el === ' ' ? (el = secS[i]) : el));
  return s === joinedWord.join('') ? true : false;
  console.log(s === joinedWord.join(''));
}

isMerge('c o d e w a r s', 'c   d   w      ', '  o   e   a r s');
console.log(isMerge('c o d e w a r s', 'c   d   w      ', '  o   e   a r s'));
