
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

function invalidOperation(operation) {
  return operation.trimStart() === '' || !(["1", "2", "3", "4"].includes(operation));
}

function inputNumber(order, lang = "en") {
  let message;
  if (order === 1) {
    message = MESSAGES[lang].firstNumber;
  } else if (order === 2) {
    message = MESSAGES[lang].secondNumber;
  }

  prompt(message);
  let number = readline.question();

  while (invalidNumber(number)) {
    prompt(MESSAGES[lang].invalidNumber);
    number = readline.question();
  }

  return number;
}

function inputOperation(lang = "en") {
  prompt(MESSAGES[lang].operation);
  let operation = readline.question();

  while (invalidOperation(operation)) {
    prompt(MESSAGES[lang].invalidOperation);
    operation = readline.question();
  }

  return operation;
}

function inputAnotherCalculation(lang = "en") {
  prompt(MESSAGES[lang].anotherCalculation);
  let input = readline.question();

  while (!input.trimStart()) {
    prompt(MESSAGES[lang].anotherCalculation);
    let input = readline.question();
  }

  debugger;
  if (input[0].toLowerCase() === "y") {
    return true;
  } else {
    return false;
  }
}

let anotherCal = true;

while (anotherCal) {
  let lang = "cn";
  let number1 = inputNumber(1,lang);
  let number2 = inputNumber(2,lang);
  let operation = inputOperation(lang);

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

  anotherCal = inputAnotherCalculation(lang);

}


