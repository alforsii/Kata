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

function cleanString(s) {
    // ... your code ...
    let backspace = '#'
    s = s.split('')
    let count = 0
    for(let i=0; i<s.length;i++){
        if(s[0] === backspace){
            s.splice(0,1)
            i = i - 1
        }
        else if(s[i] === backspace){
            s.splice(i-1,2)
            i= i-2
        }
    }
    return s.join('')
};

console.log(cleanString("abc##d######"))
console.log(cleanString("###abc#d##c"))
console.log(cleanString("#######"))
console.log(cleanString("6+yqw8hfklsd-=-f"))