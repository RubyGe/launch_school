function multiply (a, b) {
	return a * b;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = Number(readlineSync.question(prompt));
  return number;
}

let firstNumber = getNumber("Enter the first number:");
let secondNumber = getNumber("Enter the second number:");

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);