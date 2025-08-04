let sentence = 'launch school tech & talk'

function capitalize(sentence) {
  let words = sentence.split(' ');
  let capitalizedSentence = [];
  for (word of words) {
   capitalizedSentence.push(word[0].toUpperCase() + word.substring(1));
  }
  console.log(capitalizedSentence.join(' '));
}

capitalize(sentence);