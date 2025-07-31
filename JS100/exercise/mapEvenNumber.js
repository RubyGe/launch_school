let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

// If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

let mappedArray = myArray.map(number => number % 2 === 0 ? 'even' : 'odd');
console.log(mappedArray);