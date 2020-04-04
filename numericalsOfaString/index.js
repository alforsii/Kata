// You are given an input string.

// For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?

// Examples:
// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// There might be some non-ascii characters in the string.

function numericals(s){
    let letters = {}
    let result=''
     s.split('').forEach(letter => {
        if(!letters[letter]){
            letters[letter] = [letter]
            result += '1'
        }else{
            letters[letter].push(letter)
            result += `${letters[letter].length}`
        }
    })
    return (result)
  }

  console.log( numericals('aaaaaaaaaaaa'))
  console.log( numericals('Hello, World!'))

  //2.
  function numericals(s){
    const count = {};
    return s.split('').map(char => count[char] = ++count[char] || 1).join('');
  }
    