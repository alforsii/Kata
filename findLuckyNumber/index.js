//https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript

// Find the lucky numbers
// Write a function filterLucky/filter_lucky() that accepts a list of integers
// and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.

var filterLucky = x => {
  //1.
  return x.filter(n => /7/.test(n));
  //2.
  //   return x.filter(n => n.toString().match(/7/));
  //3.
  //   return x.filter(num => num.toString().includes(7));
  //4.
  //   return x.filter(num => num.toString().indexOf(7) !== -1);
};

filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]); //, [7,70,17] );
console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
filterLucky([71, 9907, 69]); //, [71,9907] );
