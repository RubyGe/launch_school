removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

function removeLastChar(str){
  console.log(str.slice(0,(str.length-1)));
}