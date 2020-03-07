// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//1a. All in one line
var moveZeros = function(arr) {
  // TODO: Program me
  return [...arr.filter(num => num !== 0), ...arr.filter(num => num === 0)];
};
//1b.
// var moveZeros = function(arr) {
//   // TODO: Program me
//   let zeros = arr.filter(num => num === 0);
//   let rest = arr.filter(num => num !== 0);
//   console.log('moveZeros -> arr: ', [...rest, ...zeros]);
//   return [...rest, ...zeros];
// };

// moveZeros([0, {}, 1, 0, 3, 4, 0, false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
// moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9]);
// Expected: '["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]', instead got: '["a",0,"b",null,"c","d",1,false,1,3,[],1,9,0,{},0,9,0,0,0,0,0,0,0]'

moveZeros([
  'a',
  'b',
  null,
  'c',
  'd',
  1,
  1,
  3,
  1,
  9,
  {},
  9,
  0,
  0,
  0,
  false,
  0,
  0,
  [],
  0,
  0,
  0,
  0,
  0,
]); //, instead got: '["a","b",null,"c","d",1,1,3,1,9,{},9,0,0,0,false,0,0,[],0,0,0,0,0]'
