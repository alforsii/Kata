// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

// Sum of Pairs
// 163526489% of 1,3404,522 of 8,812AlejandorLazaro4 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

var sum_pairs = function(ints, s) {
  //your code here
  let sumOfPairs = [];
  for (let i = 0; i < ints.length; i++) {
    let num =ints[0];
  }
  console.log('Output for: sum_pairs -> sumOfPairs', sumOfPairs);
  return sumOfPairs;
};

sum_pairs([10, 5, 2, 3, 7, 5], 10);
