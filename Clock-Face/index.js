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
var whatTimeIsIt = function(angle) {
  // Your code here
  if (angle > 360) return 'Please enter valid degree from 0 to 360. Thanks!';
  let hour = Math.floor(angle / 30);
  if (angle === 0 || (angle > 0 && angle < 30)) hour = 12;
  let reminder = angle % 30;
  //mins I find with proportion method: every 30deg we have 1hour === 60mins. So if (30deg === 60mins) => 1deg how many mins? => mins === (1deg * 60mins)/ 30deg ===(1deg * 2mins)/1deg or === 2mins
  let mins = Math.floor(reminder * 2);
  if (hour < 10) hour = '0' + hour;
  if (mins < 10) mins = '0' + mins;
  //or call addZero()
  //   hour = addZero(hour);
  //   mins = addZero(mins);
  return `${hour}:${mins}`;
};

// whatTimeIsIt(90);
// function addZero(i) {
//   if (i < 10) {
//     i = '0' + i;
//   }
//   return i;
// }

// // 2.other solutions
// var whatTimeIsIt = function(angle) {
//   let h = ~~(angle / 30),
//     m = ~~((angle % 30) * 2);
//   return `${h == 0 ? 12 : h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}`;
// };

console.log('Output for: whatTimeIsIt(30)', whatTimeIsIt(95));
