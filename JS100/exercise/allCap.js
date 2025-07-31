function convertToAllCap(string){
  return string.length > 10 ? string.toUpperCase() : string
}

console.log(convertToAllCap("Hello World!"));
console.log(convertToAllCap('goodbye'));