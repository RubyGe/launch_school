function isNotANumber(value) {
  if (!!value) {return false};
  if (value === undefined) {return false};
  if (value === 0) {return false};
  if (value === '') {return false};
  return true;
}

console.log(isNotANumber(1));
console.log(isNotANumber('a'));
console.log(isNotANumber(undefined));
console.log(isNotANumber([]));
console.log(isNotANumber(NaN));