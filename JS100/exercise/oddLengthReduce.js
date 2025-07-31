let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

let accumulator;

function oddLengths(arr) {
  return arr.reduce ((accumulator, string) => {
    if (string.length % 2 === 1) {
      accumulator.push(string.length);
    }
      return accumulator;
  }, [])
}