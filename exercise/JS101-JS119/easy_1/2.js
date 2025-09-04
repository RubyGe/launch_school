// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

function logOddNumber() {
  let num = 1;
  while (num <= 99) {
    if (num % 2 === 1) {
      console.log(num);
    }
    num += 1;
  }
}

logOddNumber();