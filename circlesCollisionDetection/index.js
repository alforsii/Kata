// https://www.codewars.com/kata/collision-detection/train/javascript

// Collision Detection
// 8893% of 111214 of 379Arongil
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }
// If a collision is detected, return true. If not, return false.

// Here's a geometric diagram of what the circles passed in represent:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (distance < radius1 + radius2) {
    return true;
  } else {
    return false;
  }
}

//other ways.
//1.
// function collision(x1, y1, radius1, x2, y2, radius2) {
//     return Math.hypot((x1 - x2), (y1 - y2))<radius1+radius2
//   }

//   //2.
//   function collision(x1, y1, r1, x2, y2, r2)
// {
//     return (x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + r2) ** 2
// }
