let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let ageIncrement = 10; ageIncrement <= 40; ageIncrement += 10) {
  console.log(`In ${ageIncrement} years, you will be ${age + ageIncrement} years old.`);
}