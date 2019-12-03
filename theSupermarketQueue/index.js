//src: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,3,4,5,10,10], 2)2+1+2+2+10 = 20
// queueTime([10,3,3,4,5,2], 2) 15
// //
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// ---------------------------Best solution------------------------
// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }

//or ==>
function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  customers.forEach(customer => {
    //grab index of min(smallest) number
    let nextTill = tills.indexOf(Math.min(...tills));
    //and add to that next customer waiting time
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}
// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

/// /----------------------My solution ))))))))))))))))))))
// function queueTime(customers, n) {
//   //TODO
//   let max = 0;
//   let min = 0;
//   let waitTime = 0;
//   let customersInTill = [];
//   if (customers.length === 0) {
//     waitTime = 0;
//   } else if (n === 1) {
//     waitTime = customers.reduce((acc, val) => {
//       return acc + val;
//     });
//   } else if (customers.length === n) {
//     waitTime = Math.max(...customers);
//   } else {
//     const copyArr = [...customers];
//     for (let k = 0; k < copyArr.length; k++) {
//       if (customersInTill.length <= n) {
//         customersInTill.push(copyArr[k]);
//         copyArr.splice(k, 1);
//       }
//       if (customersInTill.length === n) {
//         max = Math.max(...customersInTill);
//         min = Math.min(...customersInTill);
//         if (max === min) {
//           waitTime += max;
//           customersInTill.splice(0);
//         } else {
//           newMax = max - min;
//           for (let i = 0; i < customersInTill.length; i++) {
//             if (customersInTill[i] === min) {
//               customersInTill.splice(i, 1);
//               i = i - 1;
//             }
//           }
//           for (let i = 0; i < customersInTill.length; i++) {
//             let update = 0;
//             if (customersInTill[i] !== min) {
//               update = customersInTill[i] - min;
//               customersInTill.splice(i, 1, update);
//             }
//           }
//           waitTime += min;
//         }
//       }
//       if (copyArr.length === 0 && customersInTill.length < n) {
//         max = Math.max(...customersInTill);
//         if (customersInTill.length === 0) max = 0;
//         waitTime += max;
//       }
//       if (copyArr.length > 0) {
//         k = -1;
//       }
//     }
//   }
//   console.log('Output for: queueTime -> waitTime', waitTime);
//   return waitTime;
// }

// queueTime([5, 3, 4], 1); //should be 12
// queueTime([10, 2, 3, 3], 2); //should be 10
// queueTime([10, 3, 3, 4, 5, 2], 2); ////should be  15
// queueTime([10, 3, 3, 4, 5, 2], 3); ////should be  10
// queueTime([2, 3, 3, 4, 5, 10, 10], 2); //should be 20
// queueTime([], 1); //, 0;
// queueTime([1, 2, 3, 4], 1); //, 10;
// queueTime([2, 2, 3, 3, 4, 4], 2); //, 9;
// queueTime([1, 2, 3, 4, 5], 100); //, 5;
queueTime(
  [
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
  ],
  6
); // and n = 6 - Expected: 1407, instead got: -Infinity
queueTime(
  [
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
    201,
  ],
  6
); //and n = 6 - Expected: 603, instead got: -Infinity
queueTime(
  [
    21,
    1,
    20,
    4,
    22,
    47,
    41,
    19,
    42,
    50,
    12,
    40,
    41,
    13,
    50,
    1,
    26,
    24,
    26,
    39,
    46,
    42,
    4,
    43,
    45,
    32,
  ],
  2
); // and n = 2 - Expected: 383

queueTime(
  [
    30,
    39,
    39,
    43,
    50,
    23,
    18,
    7,
    47,
    29,
    3,
    3,
    2,
    22,
    34,
    36,
    49,
    1,
    28,
    11,
    15,
  ],
  6
); // and n = 6 - Expected: 99

//// for 2 tills
//
// function queueTime(customers, n) {
//   //TODO
//   let max = 0;
//   let min = 0;
//   let newMax = 0;
//   let waitTime = 0;
//   if (n === 1) {
//     waitTime = customers.reduce((acc, val) => {
//       return acc + val;
//     });
//   } else if (n > 1) {
//     for (let k = 0; k < customers.length; k++) {
//       max = Math.max(customers[0], customers[1]);
//       min = Math.min(customers[0], customers[1]);
//       newMax = max - min;
//       if (customers.length > 2) {
//         waitTime += min;
//       } else {
//         waitTime += max;
//       }
//       if (min === customers[0] && customers.length > 2) {
//         customers.splice(1, 1, newMax);
//         customers.splice(0, 1);
//       } else if (min === customers[1] && customers.length > 2) {
//         customers.splice(0, 1, newMax);
//         customers.splice(1, 1);
//       }
//       if (customers.length > 2) {
//         k = -1;
//       }
//     }
//   }
//   return waitTime;
// }

// queueTime([5, 3, 4], 1); //should be 12
// queueTime([10, 2, 3, 3], 2); //should be 10
// queueTime([10, 3, 3, 4, 5, 2], 2); ////should be  15
// queueTime([2, 3, 3, 4, 5, 10, 10], 2); //should be 20
