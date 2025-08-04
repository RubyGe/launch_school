function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/*
variables:
- greeting
- name
- hello
- xyzzy
- howdy
- foo;


object property names:
- a
- b
- c
- d
- 0, 1, 2 // property names for the array [3,4,5]

primitive values
- ' '
- 1
- 2
- 'Hi'
- 'Grace'

and objects
- { a: 1, b: 2, c: [3, 4, 5], d: {} }
- [3, 4, 5]
- {}
- hello
- xyzzy
- 

*/