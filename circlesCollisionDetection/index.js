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

//1. Solution - 1
// let xDistance = x2 - x1; //x2 is circle2 'x' position, x1 circle1 'x' position on x axel
// let yDistance = y2 - y1; //y2 is circle2 'y' position, y1 circle1 'y' position on y axel
// r1 + r2 >= Distance ? collision : notCollision; (check the image circlesCollision.gif)
// r1 - circle1 radius, r2 circle2
function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return radius1 + radius2 >= distance ? true : false;
}

//2. Solution - 2
function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.hypot(x1 - x2, y1 - y2) < radius1 + radius2;
}

//3. Solution - 3
function collision(x1, y1, r1, x2, y2, r2) {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + r2) ** 2;
}
