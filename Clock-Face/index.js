// // Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360

//1. My solution
// if (angle > 360) angle = angle - 360;
// let hr = Math.floor(angle / 30);
// if (angle === 0 || (angle > 0 && angle < 30)) hr = 12;
// let reminder = angle % 30;
// let m = Math.floor(reminder * 2);
// if (hr < 10) hr = '0' + hr;
// if (m < 10) m = '0' + m;
// return `${hr}:${m}`;
var whatTimeIsIt = function(angle) {
  // Your code here
  if (angle > 360) angle = angle - 360;
  let hr = Math.floor(angle / 30);
  let m = Math.floor((angle % 30) * 2);
  return `${hr == 0 ? 12 : hr > 9 ? hr : '0' + hr}:${m > 9 ? m : 'o' + m}`;
};

// // 2.other solutions
// var whatTimeIsIt = function(angle) {
//   let h = ~~(angle / 30),
//     m = ~~((angle % 30) * 2);
//   return `${h == 0 ? 12 : h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}`;
// };

// console.log('Output for: whatTimeIsIt(30)', whatTimeIsIt(455));
