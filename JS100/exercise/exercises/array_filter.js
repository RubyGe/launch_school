let scores = [96, 47, 113, 89, 100, 102];

let count = scores.reduce((accumulator, scores) => scores >= 100 ? accumulator + 1 : accumulator, 0);

console.log(count);