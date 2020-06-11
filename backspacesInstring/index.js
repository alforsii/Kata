// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
// Backspaces in string
// Output
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

//1.
function cleanString(s) {
    // ... your code ...
    s = s.split('')
    for(let i=0; i<s.length;i++){
        if(s[0] === '#'){
            s.splice(0,1)
            i = i - 1
        }
        else if(s[i] === '#'){
            s.splice(i-1,2)
            i= i-2
        }
    }
    return s.join('')
};

// console.log(cleanString("abc##d######"))    // ''
// console.log(cleanString("abc#d##c"))    //'ac'
// console.log(cleanString("###abc#d##c"))  // 'ac'
// console.log(cleanString("#######"))   // ''


//2.
clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');
//3.
function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }