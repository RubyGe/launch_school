/*Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15. */

const readline = require('readline-sync');
const COMPUTATIONS = ["s", "p"];

console.log("Please enter an integer greater than 0:");
let inputNumber = Number(readline.prompt());

function isInputInvalid(number) {
  return (!Number.isInteger(number) || number <= 0);
}

function isComputeInvalid(compute) {
  return compute && !COMPUTATIONS.includes(compute.toLowerCase());
}

function calculateSum(inputNumber) {
  let num = 1;
  let sum = 0;
  while (num <= inputNumber) {
    sum += num;
    num += 1;
  }
  return sum;
}

function calculateProduct(inputNumber) {
  let num = 1;
  let product = 1;
  while (num <= inputNumber) {
    product *= num;
    num += 1;
  }
  return product;
}

while (isInputInvalid(inputNumber)) {
  console.log("Invalid input. Please enter an integer greater than 0:");
  inputNumber = Number(readline.prompt());
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let compute = readline.prompt();

while (isComputeInvalid(compute)) {
  console.log('Invalid input. Only enter "s" or "p".');
  compute = readline.prompt();
}

if (compute.toLowerCase() === "s") {
  console.log(`The sum of the integers between 1 and ${inputNumber} is ${calculateSum(inputNumber)}.`);
} else if (compute.toLowerCase() === "p") {
  console.log(`The product of the integers between 1 and ${inputNumber} is ${calculateProduct(inputNumber)}.`);
}