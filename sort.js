//3.Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    let s3 = s1.concat(s2).split('').sort((a,b) =>{
                  if(a>b) return 1;
                  if(a<b) return -1;
                  return 0;
                }).join('');
    let longest = '';
    for(let i=0;i<s3.length;i++){
      if(s3[i]!==s3[i+1]){
        longest +=s3[i];
        
      }
    }
    return longest;
  }
  
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
longest(a, b) 
console.log(longest(a, b));  //-> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

  // // 2-d option just sorting and compare.
//   function longest(s1, s2) {
//     // your code
//      if(s1.length > s2.length){
//         return    s1.split('').sort((a,b) =>{
//                   if(a>b) return 1;
//                   if(a<b) return -1;
//                   return 0;
//                 }).join('');
//         }
//     else { 
//       return s2.split('').sort((a,b) =>{
//                 if(a>b) return 1;
//                 if(a<b) return -1;
//                 return 0;
//               }).join('');
//    }
//   }
  
//  let a = "xyaabbbccccdefww";
//  let b = "xxxxyyyyabklmopq";
//   longest(a,b);  //-->'abklmopqxxxxyyyy' .this is just sorting and comparing
