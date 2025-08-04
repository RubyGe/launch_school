let obj = {
  b: 2,
  a: 1,
  c: 3,
};

keys = Object.keys(obj);

let objCap = keys.map(key => key.toUpperCase());

console.log(objCap);