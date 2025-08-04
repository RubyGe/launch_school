let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function logVocabulary(array) {
  array.forEach(subArray => subArray.forEach(word => console.log(word)));
}

logVocabulary(vocabulary);