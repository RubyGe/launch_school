function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
 variables:
- arg1, arg2, foo, qux, result, bar
 
object property names
- abc, def, ghi, jkl, mno, pqr
- 0, 1, 2, 3 // [1, 2, 3, [4, 5, 6]]
- 0, 1, 2 // [4, 5, 6]
 
 
 primitive values
 - 'Hello', 1, 2, 3, 4, 5, 6, NaN, 'Victor', 'Antonina', null
 
 and objects
 - bar, {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  }, [1, 2, 3, [4, 5, 6]], [4, 5, 6] // result is not yet an object because we have not run the code

*/