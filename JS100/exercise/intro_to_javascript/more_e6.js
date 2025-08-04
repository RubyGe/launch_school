let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(words, regex) {
  let matchedWords = [];
  words.forEach(word => {
    if (regex.test(word)) {
      matchedWords.push(word);
    }
  })
  return matchedWords;
}