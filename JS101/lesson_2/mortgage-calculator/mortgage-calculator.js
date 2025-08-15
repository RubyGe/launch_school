// prompt to input loan amount, validate and reprompt
// prompt to input monthly interest rate, validate and reprompt
//  need to convert into monthly interest rate from APR
// prompt to input loan duration in months (usually in years), validate and reprompt
// do you want to work with a non-integer months or years? do you want to work with a no interst loan?

// calculate using m = p * (j / (1 - Math.pow((1 + j), (-n))));

const readline = require("readline-sync");
const MONTHS_PER_YEAR = 12;
const PERCENTAGE_DIVISOR = 100;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input)) || Number(input) < 0;
}

function getLoanAmount() {
  prompt("Please enter your loan amount, do not include the $ sign.");
  let amount = readline.question();

  while (invalidNumber(amount)) {
    prompt("Your input is not a valid number. Please enter a valid positive number without the $ sign");
    amount = readline.question();
  }

  return Number(amount);
}

function getMonthlyInterestRate() {
  prompt("Please enter your APR interest rate in %. For example, if it's 5.4%, just enter 5.4");
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt("Your input is not a valid number. Please enter a valid annual percentage rate.");
    annualPercentageRate = readline.question();
  }

  if (Number(annualPercentageRate) === 0) {
    return 0;
  } else {
      return Number(annualPercentageRate) / PERCENTAGE_DIVISOR / MONTHS_PER_YEAR;
  }
}

function getLoanDurationInMonths() {
  prompt("How many years is your loan duration? Please enter a number.");
  let loanDurationInYear = readline.question();

  while (invalidNumber(loanDurationInYear)) {
    prompt("Your input is not a valid number. Please enter a valid positive number.");
    loanDurationInYear = readline.question();
  }

  return loanDurationInYear * MONTHS_PER_YEAR;
}

function runLoanCalculator() {
  console.clear();

  let loanAmount = getLoanAmount();
  let monthlyInterestRate = getMonthlyInterestRate();
  let loanDurationInMonths = getLoanDurationInMonths();

  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (0-loanDurationInMonths))));

  prompt(`With a loan amount of $${loanAmount}, monthly interest rate of ${(monthlyInterestRate * PERCENTAGE_DIVISOR).toFixed(2)}%, and ${loanDurationInMonths} months of loan duration\nYour monthly payment amount is $${monthlyPayment.toFixed(2)}`);
}

while (true) {
  runLoanCalculator();
  prompt("Would you like to run another calculation?");
  if (readline.question()[0].toLowerCase() !== 'y') {
    break;
  }
}