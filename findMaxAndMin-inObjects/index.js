//1.using reduce() find max  or min number in array of objects.
// for example:
let array = [
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
];

//1. Solution - 1 | reduce() without Math.max or .min
// function getMinY(arr) {
//   return arr.reduce(
//     (min, val) => (val.year < min ? val.year : min),
//     arr[0].year
//   );
// }

// function getMaxY(arr) {
//   return arr.reduce(
//     (max, val) => (val.year > max ? val.year : max),
//     arr[0].year
//   );
// }

//2. Solution - 2 | map() with Math.max and .min
function getYs() {
  return array.map(d => d.year);
}
function getMinY() {
  return Math.min(...getYs());
}
function getMaxY() {
  return Math.max(...getYs());
}

//3. Solution - 3 | reduce() with Math.max and .min
function getMinY(data) {
  return data.reduce((min, b) => Math.min(min, b.year), data[0].year);
}
function getMaxY(data) {
  return data.reduce((max, b) => Math.max(max, b.year), data[0].year);
}
//it doesn't work with node
console.log('getMinY(arr)', getMinY(array));
//it doesn't work with node
console.log('getMinY(arr)', getMaxY(array));
