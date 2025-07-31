let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

// function replace6(arr) {
//   arr.forEach(subArr => {
//     subArr.forEach(element => {
//       if (element === 6) {
//         element = 606
//       }
//     })
//   })
//   return arr;
// }

function replace6(arr) {
  for (let i = 0; i < arr.length; i++) {
    subArr = arr [i];
    for (let n = 0; n < subArr.length; n++) {
      if (subArr[n] === 6) {
        subArr[n] = 606;
      }
    }
  }
  return arr;
}

console.log(replace6(arr));



