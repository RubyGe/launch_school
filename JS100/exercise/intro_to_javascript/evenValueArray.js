let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
evenValueArray = myArray.filter(number => number % 2 === 0);
evenValueArray.forEach(number => console.log(number));