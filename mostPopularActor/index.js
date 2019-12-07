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
function mostPopularActor(actors) {
  let pop = actors[0].popularityScore;

  for (let i = 0; i < actors.length; i++) {
    if (pop < actors[i].popularityScore) pop = actors[i].popularityScore;
  }
  let popActor = actors.filter(actor => {
    return actor.popularityScore === pop;
  });
  console.log('Output for: mostPopularActor -> popActor', popActor);
}

mostPopularActor(americanActors);
