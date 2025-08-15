// prompt to input loan amount, validate and reprompt
// prompt to input monthly interest rate, validate and reprompt
//  need to convert into monthly interest rate from APR
// prompt to input loan duration in months (usually in years), validate and reprompt
// do you want to work with a non-integer months or years? do you want to work with a no interst loan?

// calculate using m = p * (j / (1 - Math.pow((1 + j), (-n))));

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(input) {
  debugger;
  return input.trimStart() === '' || Number.isNaN(Number(input)) || Number(input) < 0;
}

function getLoanAmount() {
  prompt("Please enter your loan amount, do not include the $ sign.");
  let amount = readline.question();

  while (invalidNumber(amount)) {
    prompt("Your input is not a valid number. Please enter a valid number without the $ sign");
    amount = readline.question();
  }

  return Number(amount);
}

function getMonthlyInterestRate() {
  prompt("Please enter your APR interest rate in %. For example, if it's 5.4%, just enter 5.4");
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt("Your input is not a valid number. Please enter a valid number without the $ sign");
    annualPercentageRate = readline.question();
  }

  if (Number(annualPercentageRate) === 0) {
    return 0;
  } else {
      return Number(annualPercentageRate) / 100 / 12;
  }
}

function getLoanDurationInMonths() {
  prompt("How many years is your loan duration? Please enter a number.");
  let loanDurationInYear = readline.question();

  while (invalidNumber(loanDurationInYear)) {
    prompt("Your input is not a valid number. Please enter a valid number without the $ sign");
    loanDurationInYear = readline.question();
  }

  return loanDurationInYear * 12;
}

let loanAmount = getLoanAmount();
let monthlyInterestRate = getMonthlyInterestRate();
let loanDurationInMonths = getLoanDurationInMonths();

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (0-loanDurationInMonths))));

prompt(`With a loan amount of $${loanAmount}, monthly interest rate of ${(monthlyInterestRate * 100).toFixed(2)}%, and ${loanDurationInMonths} months of loan duration\nYour monthly payment amount is $${monthlyPayment.toFixed(2)}`);