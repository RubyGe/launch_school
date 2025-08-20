const readline = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
// initialize computer and user score;
let scores = {
  user: 0,
  computer: 0
};

function countScore(winner) {
  if (winner !== 'tie') scores[winner] += 1;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function decideRoundWinner(choice, computerChoice) {
  if ((choice === 'rock' && ['scissors', 'lizard'].includes(computerChoice)) ||
      (choice === 'paper' && ['rock', 'spock'].includes(computerChoice)) ||
      (choice === 'scissors' && ['paper', 'lizard'].includes(computerChoice)) ||
      (choice === 'lizard' && ['paper', 'spock'].includes(computerChoice)) ||
      (choice === 'spock' && ['rock', 'scissors'].includes(computerChoice))) {
    return 'user';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function displayRoundWinner(winner) {
  switch (winner) {
    case 'user':
      prompt('You win this round!');
      break;
    case 'computer':
      prompt('Computer win this round!');
      break;
    case 'tie':
      prompt("It's a tie this round.");
      break;
  }
}

function displayScores(scores) {
  prompt(`Your Score: ${scores.user}. Computer Score: ${scores.computer}`);
}

console.clear();

while (true) {
  prompt(`Choose one: ${Object.entries(VALID_CHOICES).map((keyValuePair) => `${keyValuePair[0]} for ${keyValuePair[1]}`).join(', ')}`);
  let input = readline.question();

  while (!Object.keys(VALID_CHOICES).includes(input)) {
    prompt("That's not a valid choice. Please enter your choice again.");
    input = readline.question();
  }

  let choice = VALID_CHOICES[input];
  let numberOfChoice = Object.keys(VALID_CHOICES).length;
  let randomIndex = Math.floor(Math.random() * numberOfChoice);
  let computerChoice = VALID_CHOICES[Object.keys(VALID_CHOICES)[randomIndex]];

  // decide and display round winner
  let roundWinner = decideRoundWinner(choice, computerChoice);
  prompt(`Your chose ${choice}, computer chose ${computerChoice}`);
  displayRoundWinner(roundWinner);

  // count score
  countScore(roundWinner);
  displayScores(scores);

  // decide and display grand winner if any
  if (scores.user === 3) {
    prompt("User win the game!");
    break;
  } else if (scores.computer === 3) {
    prompt("Computer win the game!");
    break;
  } else {
    prompt("No grand winner yet, the game continues...");
  }
}

