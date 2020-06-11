// https://www.codewars.com/kata/permutations/train/javascript
// Permutations
// Examples:
// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutations(string) {
  let permutation = [];
  permutation[0] = string;
  permutation0 = string.split('');
  let reString = string
    .split('')
    .reverse()
    .join('');
  let len = permutation0.length;
  let index;
  let newStr = [];
  for (let i = 0; i < len; i++) {
    if (i > 0) {
      newStr.push(permutation0[i]);
      if (permutation0[i] !== permutation0[i - 1]) {
        index = permutation0.indexOf(permutation0[i]);
        // index = permutation0[i];
        // newStr[i - 1] = permutation0[i];
        // newStr[i] = permutation0[i - 1];
        // let spliced = newStr.splice(i, 1);
        newStr.splice(i - 1, 0, permutation0[i]);
        permutation.push(newStr.join(''));
        // newStr = newStr;
        newStr.splice(i + 1, 1);

        // newStr = permutationLast;
      }
      if (i === len - 1) {
        // && permutation[permutation.length - 1] !== reString
        // permutation.push(newStr.join(''));
      }
      if (i === len - 1 && newStr.join('') !== reString) {
        // i = -1;
        permutation0 = newStr;
        // newStr = permutation0
      }
    } else {
      newStr.push(permutation0[i]);
    }
  }
  permutationLast = permutation[permutation.length - 1];
  console.log('permutation', permutation);
  console.log('permutation0', permutation0);
  console.log('permutationLast', permutationLast);
  console.log('newStr', newStr);
  console.log('newStr', reString);
}

// permutations('a'); // ['a']
// console.log(permutations('a'));
// permutations('ab'); // ['ab', 'ba']
// console.log(permutations('ab'));
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// console.log(permutations('aabb'));
