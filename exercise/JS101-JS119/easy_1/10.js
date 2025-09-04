/*  computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).*
*/
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

function multisum(n) {
  let numberArray = Array.from({length: n}, (_, i) => (i + 1));

  let sum = numberArray.reduce((accu, num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      return accu + num;
    } else {
      return accu;
    }
  }, 0);

/*
  let sum = numberArray.reduce((accu, num) => {
    return num % 3 === 0 || num % 5 === 0 ? accu + num : accu
  }, 0);
/*

  return sum;
}