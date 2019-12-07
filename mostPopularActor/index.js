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
  actors.filter((actor, i) => {
    return actors[i].popularityScore > actors[i + 1].popularityScore;
  });
}
console.log(
  'Output for: mostPopularActor(americanActors)',
  mostPopularActor(americanActors)
);
mostPopularActor(americanActors);
