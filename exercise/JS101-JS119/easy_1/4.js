const readline = require('readline-sync');
const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = Number(readline.prompt());

console.log("Enter the width of the room in meters:");
let width = Number(readline.prompt());

let areaInSquareMeters = length * width;
let areaInSquareFeet = areaInSquareMeters * SQUARE_METERS_TO_SQUARE_FEET;

console.log(`The area of the room is ${areaInSquareMeters.toFixed(2)} square meters (${areaInSquareFeet.toFixed(2)} square feet).`);
