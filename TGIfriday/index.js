// https://www.codewars.com/kata/tgi-friday/train/javascript
// We all love fridays, and even better if it is the last day of the month!

// In this Kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

// Your work is to return the number of times a month ends with a Friday.

// If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

// For example, between 1901 and 2000, a month ends on Friday 171 times.

// let days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// let months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
// let d = new Date(initialYear).getFullYear() % 4 == 0 ? 366 : 365;
// let day = new Date(1901, 0, 4).getDay();
// let day = new Date(1901, 0);
function lastDayIsFriday(initialYear, endYear) {
  let friday = 0;
  if (!endYear) endYear = initialYear;
  for (let year = initialYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      let dayOfaWeek = new Date(year, month, 0).getDay();
      if (dayOfaWeek === 5) friday++;
    }
  }
  return friday;
}

//2. same as above
// function lastDayIsFriday(initialYear, endYear = initialYear) {
//   let fridays = 0
//   for (let y = initialYear; y <= endYear; y++) {
//     for (let month = 0; month < 12; month++) {
//       if (new Date(y, month + 1, 0).getDay() === 5) fridays++
//     }
//   }
//   return fridays
// }
// lastDayIsFriday(1901, 2000);
console.log('Output for: lastDayIsFriday(1901)', lastDayIsFriday(1991));
