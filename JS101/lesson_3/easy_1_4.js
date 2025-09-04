let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let firstLetter = munstersDescription[0].toUpperCase();
let lowerCaseDescription = munstersDescription.toLocaleLowerCase();
let newSentence = firstLetter + lowerCaseDescription.slice(1);

console.log(newSentence);