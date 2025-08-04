function maxNumber(array) {
  console.log(Math.max(...array));
}

let list = [1, 6, 3, 2];
maxNumber(list);

list = [-1, -6, -3, -2];
maxNumber(list);

list = [2, 2];
maxNumber(list);
