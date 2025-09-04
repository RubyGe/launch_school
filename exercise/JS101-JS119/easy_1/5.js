/* What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00 */

const readline = require('readline-sync');

console.log("What is the bill?");
let bill = Number(readline.prompt());

console.log("What is the tip percentage?");
let tipPercentage = Number(readline.prompt());

let tip = bill * tipPercentage / 100;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(tip + bill).toFixed(2)}`);