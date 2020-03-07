// https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

// RGB To Hex Conversion

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

//Solution-1:
// function rgb(r, g, b) {
//   if (r > 255) r = 255;
//   if (g > 255) g = 255;
//   if (b > 255) b = 255;
//   if (r < 0) r = 0;
//   if (g < 0) g = 0;
//   if (b < 0) b = 0;
//   let toHexR = r.toString(16);
//   if (toHexR.length < 2) toHexR = '0' + toHexR;
//   let toHexG = g.toString(16);
//   if (toHexG.length < 2) toHexG = '0' + toHexG;
//   let toHexB = b.toString(16);
//   if (toHexB.length < 2) toHexB = '0' + toHexB;
//   if (r == 0) toHexR = '0' + r.toString(16);
//   if (g == 0) toHexG = '0' + g.toString(16);
//   if (b == 0) toHexB = '0' + b.toString(16);

//   let rgb = [toHexR, toHexG, toHexB].join('').split('');
//   for (let i = 0; i < rgb.length; i++) {
//     rgb[i] = rgb[i].toUpperCase();
//   }
//   rgb = rgb.join('');
//   return rgb;
// }

//Solution-2:
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}
function toHex(d) {
  if (d < 0) {
    return '00';
  }
  if (d > 255) {
    return 'FF';
  }
  return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}

//3.Solution-3:
function rgb(r, g, b) {
  return [r, g, b]
    .map(x => ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2))
    .join('')
    .toUpperCase();
}

// toHex(211);
let num = 255;
console.log('slice(-2)', num.toString(16));
console.log('slice(-2)', 'string'.slice(-2));
rgb(211);
console.log('Output for: rgb(211)', rgb(211));

rgb(255, 255, 255); //
rgb(255, 255, 300); //
console.log('Output for: rgb(255, 255, 300)', rgb(255, 255, 300));
rgb(0, 0, -20); //
// rgb(11, 211, 67); //
// rgb(105, 18, 15); //
// rgb(0, 0, 60); // returns 000000
// rgb(148, 0, 211); // returns 9400D3
