console.log(isLeapYear(2016));      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
isLeapYear(1);         // false
console.log(isLeapYear(100));       // true
isLeapYear(400);       // true

function isLeapYear(year) {
  if (year <= 1752) {
    return year % 4 === 0;
  } else if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
}

