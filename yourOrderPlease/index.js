// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//My Solution:
function order(words) {
  // ...
  let arr1 = words.split(' ');
  let arr2 = words
    .split(' ')
    .map(word => {
      return word
        .split('')
        .filter(letter => !isNaN(parseInt(letter)))
        .join('');
    })
    .sort((a, b) => a - b);
  return arr2
    .map((num, i) => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].includes(num)) {
          return arr1[i];
        }
      }
    })
    .join(' ');
  console.log(arr1);
  return arr2;
}

//Solution-2:
// function order(words){

//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }

//Solution-3:
// const order = w => w.split(' ').sort((a, b) => /\d/.exec(a) - /\d/.exec(b)).join(' ');

order('is2 Thi1s T4est 3a'); //, "Thi1s is2 3a T4est"
console.log(order('is2 Thi1s T4est 3a'));
// order('4of Fo1r pe6ople g3ood th5e the2'); //, "Fo1r the2 g3ood 4of th5e pe6ople"
// order(''); //, ""
