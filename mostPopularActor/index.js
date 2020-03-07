// Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor
var americanActors = [
  { name: 'Tom Hanks', popularityScore: 87 },
  { name: 'Natalie Portman', popularityScore: 90 },
  { name: 'Jack Nicholson', popularityScore: 98 },
  { name: 'Julia Roberts', popularityScore: 88 },
];
// console.log(mostPopularActor(americanActors)); // => "Jack Nicholson"
//1. Solution - 1
function mostPopularActor(actors) {
  let maxScore = actors.reduce(
    (max, val) => Math.max(max, val.popularityScore),
    actors[0].popularityScore
  );
  return actors.filter(actor => actor.popularityScore == maxScore)[0].name;
}

//2. Solution - 2
// function mostPopularActor(actors) {
//   let popScore = actors[0].popularityScore;

//   for (let i = 0; i < actors.length; i++) {
//     if (popScore < actors[i].popularityScore)
//       popScore = actors[i].popularityScore;
//   }
//   let popActor = actors.filter(actor => {
//     return actor.popularityScore === popScore;
//   });
//   console.log('Output for: mostPopularActor -> popActor', popActor);
// }

mostPopularActor(americanActors);
console.log(mostPopularActor(americanActors));
