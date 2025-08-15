
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');

const readline = require("readline-sync");

console.log("Welcome to Calculator!");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let another_cal = true;

while (another_cal) {
  prompt(MESSAGES.cn.firstNumber);

  let number1 = readline.question();

  prompt(MESSAGES.cn.secondNumber);

  let number2 = readline.question();

  prompt(MESSAGES.cn.operation);

  let operation = readline.question();

  let output;

  if (operation === "1") {
    output = Number(number1) + Number(number2);
  } else if (operation === "2") {
    output = Number(number1) - Number(number2);
  } else if (operation === "3") {
    output = Number(number1) * Number(number2);
  } else if (operation === "4") {
    output = Number(number1) / Number(number2);
  }

  prompt(output);

  prompt(MESSAGES.cn.anotherCalculation);

  switch (readline.question()[0].toLowerCase()){
    case "y":
      another_cal = true;
      break;
    case "n":
      another_cal = false;
      break;
    default:
      another_cal = false;
      break;
  }

}


