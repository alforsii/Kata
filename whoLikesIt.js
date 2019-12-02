////codewar

// 1.You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
  

function likes(names){
    let len = names.length ;
     if(len === 0){
       return `no one likes this`;
     } 
   for(let i=0;i<len;i++){
     if(len === 1){
       return `${names[0]} likes this`;
     } else if( len === 2){
       return `${names[0]} and ${names[1]} like this`;
     } else if(len === 3){
       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
     } else if(len > 3){
       return `${names[0]}, ${names[1]} and ${len - 2} others like this`;
     }
   }
  }

  //another way .
  // function likes(names){
  //   const [first, second, third, ...theRest] = names;
  //   let len = names.length;
  //   if(len === 0){
  //      return `no one likes this`;
  //    } 
  //    else if(len === 1){
  //      return `${first} likes this`;
  //    } 
  //    else if( len === 2){
  //      return `${first} and ${second} like this`;
  //    } 
  //    else if(len === 3){
  //      return `${first}, ${second} and ${third} like this`;
  //    } 
  //    else if(len > 3){
  //      return `${first}, ${second} and ${theRest.length+1} others like this`;
  //    }
   
  // }
  
  let people =[]
  likes(people);
//   console.log(likes(people));
  
  people =["Peter"];
  likes(people);
//   console.log(likes(people));
  
  people =["Jecob", "Alex"];
  likes(people);
//   console.log(likes(people));
  
  people =["Max", "John", "Mark"];
  likes(people);
//   console.log(likes(people));
  
  people =["Alex", "Jacob", "Mark", "Max"];
  likes(people);
//   console.log(likes(people));
  
  