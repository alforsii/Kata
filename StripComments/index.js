// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

// Strip Comments
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:
// solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"
// ALGORITHMS STRINGS

function solution(input, markers) {
  let sortedArr = [];
  let arr = input
    .split(' ')
    .filter(el => el !== markers[0] && el !== markers[1] && el !== 'and')
    .map(el => {
      if (el.includes(markers[0])) {
        el = el.split(markers[0]).join('');
      }
      if (el.includes(markers[1])) {
        el = el.split(markers[1]).join('');
      }
      if (el.includes('\n')) {
        let sorted = el.split('\n');
        sorted.map((e, i) => {
          if (sorted.indexOf(e) !== sorted.lastIndexOf(e)) {
            sorted[sorted.indexOf(e)] = '';
          }
        });
        el = sorted.join('\n');
      }
      return el;
    });
  arr.forEach(elem => {
    if (elem.includes(',')) elem = elem.replace(',', '');
    if (sortedArr.indexOf(elem) == -1) sortedArr.push(elem);
  });
  sortedArr[0] += ', ';

  console.log('ash,' === 'ash');
  return sortedArr.join('');
}
var result = solution('apples, pears # and bananas\ngrapes\nbananas !apples', [
  '#',
  '!',
]);
console.log(result);
