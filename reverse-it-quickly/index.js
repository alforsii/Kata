// //https://www.codewars.com/kata/59ae589c07157afba80000a7/train/javascript
// Typically, reversing an array is a pretty straightforward task even for novice programmers. But not when a crowd of angry zombies scratching your door, looking for a fresh brains. In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw. So there's two obstacles:

// Your code needs to be as short as possible, in fact not longer than 28 characters
// Because you are scared and stressed you have forgotten how to use the standard reverse() method
// #Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]] #Output: [[],'c','b','a',3,2,1]

//1. With reduce
//...passes all except one, length of code should be <= 28 :)
weirdReverse = (a) => a.reduce((a, v) => [v, ...a], []);

//2. Solution is really weird :(
weirdReverse = (a) => a.sort((a) => 1);
