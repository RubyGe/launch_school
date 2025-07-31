function evenOrOdd(number) {
  if (parseInt(String(number), 10)) !== number {
    console.log("The argument is not an integer!");
    return;
  }
  const answer = number % 2 === 0 ? 'even' :'odd';
  console.log(answer);
}

evenOrOdd(5); // 'odd'
evenOrOdd(6); // 'even'
evenOrOdd(0); // 'even'
evenOrOdd(6.4); // 'The argument is not an integer!'