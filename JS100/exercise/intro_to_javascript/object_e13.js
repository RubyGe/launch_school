function foo(bar) {
  console.log(bar());
}

function bar(){
  return 'Welcome';
}

foo(bar);    // Should print 'Welcome'
bar = () => {return 3.1415};
foo(bar);    // Should print 3.1415
bar = () => {return [1, 2, 3]};
foo(bar);    // Should print [1, 2, 3]

