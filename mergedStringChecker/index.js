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

//Solution-1
function isMerge(s, part1, part2) {
  return !s
    ? !(part1 || part2)
    : (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
        (s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
}

//Solution-2
function isMerge(s, part1, part2) {
  if (s === '' && part1 === '' && part2 === '') return true;

  if (s !== '') {
    if (s[0] === part1[0] && part1[0] === part2[0]) {
      // we make two branches of an recursion and get OR of the answers
      return (
        isMerge(s.slice(1), part1.slice(1), part2) ||
        isMerge(s.slice(1), part1, part2.slice(1))
      );
    } else if (s[0] === part1[0]) {
      return isMerge(s.slice(1), part1.slice(1), part2);
    } else if (s[0] === part2[0]) {
      return isMerge(s.slice(1), part1, part2.slice(1));
    }
  }

  return false;
}

// isMerge('codewars', 'code', 'wars');
// isMerge('codewars', 'cdw', 'oearsss');
console.log(isMerge('codewars', 'cdw', 'oearsss')); //false
console.log(isMerge('codewars', 'cdwr', 'oeas')); //true
// isMerge('codewars', 'code', 'wasr');
console.log(isMerge('codewars', 'code', 'wasr')); //false
console.log(isMerge('codewars', 'code', 'wars')); //true
// isMerge('c o d e w a r s', 'c   d   w      ', '  o   e   a r s');
// console.log(isMerge('c o d e w a r s', 'c   d   w      ', '  o   e   a r s'));
