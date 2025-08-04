catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

function catAge(humanAge) {
  let catAge = 0;
  if (humanAge < 0) {
    console.log("incorrect age");
    return;
  }
  if (humanAge === 0) {
    catAge = 0;
  } else if (humanAge === 1) {
    catAge = 15;
  } else if (humanAge === 2) {
    catAge = 15 + 9;
  } else {
    catAge = 15 + 9 + (humanAge - 2) * 4;
  }
  console.log(catAge);
}