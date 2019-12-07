// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

// Moving Zeros To The End
// 52514488% of 3,09417,288 of 28,509xcthulhu3 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function(arr) {
  // TODO: Program me
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeros.push(arr[i]);
      arr.splice(i, 1);
      i = -1;
    }
  }
  arr.push(...zeros);
  console.log('Output for: moveZeros -> arr', arr);
  return arr;
};
// moveZeros([0, {}, 1, 0, 3, 4, 0, false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
// moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9]);
// Expected: '["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]', instead got: '["a",0,"b",null,"c","d",1,false,1,3,[],1,9,0,{},0,9,0,0,0,0,0,0,0]'

moveZeros([
  [
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
  ],
]); //, instead got: '["a","b",null,"c","d",1,1,3,1,9,{},9,0,0,0,false,0,0,[],0,0,0,0,0]'
