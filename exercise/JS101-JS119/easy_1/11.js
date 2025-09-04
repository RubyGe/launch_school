utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

function utf16Value(str) {
  let sum = 0;
  for (let index = 0; index < str.length; index += 1) {
    sum += str.charCodeAt(index);
  }
  return sum;
}