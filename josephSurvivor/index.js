// https://www.codewars.com/kata/josephus-survivor
// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

//1a. my solution
// function josephusSurvivor(n, k) {
//   //your code here
//   let arr = [];
//   let count = 0;
//   // 1. Create arr with for loop
//   for (let i = 1; i <= n; i++) arr.push(i); //no need curly braces when one line of code

//   for (let j = 0; j < arr.length; j++) {
//     count++;

//     if (count % k === 0 && arr.length > 1) {
//       arr.splice(j, 1);
//       j = j - 1;
//     }
//     if (j === arr.length - 1 && arr.length > 1) j = -1;
//   }

//   return arr[0];
// }
//1b. my solution
function josephusSurvivor(n, k) {
  //your code here
  let count = 0;
  //2. Create arr without for loop
  let arr = Array.from({ length: n }, (v, i) => i + 1);

  for (let j = 0; j < arr.length; j++) {
    count++;

    if (count % k === 0 && arr.length > 1) {
      arr = arr.filter(num => num !== arr[j]);
      j = j - 1;
    }
    if (j === arr.length - 1 && arr.length > 1) j = -1;
  }

  return arr[0];
}

//2.another way.
// function josephusSurvivor(n, k) {
//   return n < 1 ? 1 : ((josephusSurvivor(n - 1, k) + --k) % n) + 1;
// }

//3.another solution
// function josephusSurvivor(n, k) {
//   res = 1;
//   for (var i = 1; i <= n; i++) res = ((res + k - 1) % i) + 1; //no need curly braces when one line of code
//   return res;
// }

josephusSurvivor(7, 3); //,4)
console.log(josephusSurvivor(7, 3));
// josephusSurvivor(11, 19); //,10)
console.log(josephusSurvivor(11, 19));
// josephusSurvivor(1, 300); //,1)
// josephusSurvivor(14, 2); //,13)
// josephusSurvivor(100, 1); //,100)
