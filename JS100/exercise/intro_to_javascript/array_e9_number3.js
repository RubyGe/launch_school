// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// function checkFor3(array) {
//   if (array.length === 0) {
//     return false;
//   }
//   new_array = array.filter(number => number === 3)
//   return new_array.length === 0 ? false : true;
// }

function checkFor3(array) {
  return array.includes(3)
}

console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));
