//1.using reduce() find max  or min number in array of objects.
// for example:
let array = [
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
];
function getMinY(arr) {
  return arr.reduce(
    (min, val) => (val.year < min ? val.year : min),
    arr[0].year
  );
}
//it doesn't work with node
console.log('getMinY(arr)', getMinY(array));

function getMaxY(arr) {
  return arr.reduce(
    (max, val) => (val.year > max ? val.year : max),
    arr[0].year
  );
}
//it doesn't work with node
console.log('getMinY(arr)', getMaxY(array));
//2.using map() find objects max number -not sure... need to test.
// function getYs(){
//   return data.map(d => d.y);
// }
// function getMinY(){
//   return Math.min(...getYs());
// }
// function getMaxY(){
//   return Math.max(...getYs());
// }

//3 method ---not sure
function getMinY(data) {
  return data.reduce((min, b) => Math.min(min, b.y), data[0].y);
}
function getMaxY(data) {
  return data.reduce((max, b) => Math.max(max, b.y), data[0].y);
}

//4.

function findMinMax(arr) {
  let min = arr[0].y,
    max = arr[0].y;

  for (let i = 1, len = arr.length; i < len; i++) {
    let v = arr[i].y;
    min = v < min ? v : min;
    max = v > max ? v : max;
  }

  return [min, max];
}
