
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const config = require('./calculator_messages.json');

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
  prompt("What's the first number?");

  let number1 = readline.question();

  prompt("What's the second number?");

  let number2 = readline.question();

  prompt(
    "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
  );

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

  console.log(output);

  console.log("another calculation? y/n")

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


