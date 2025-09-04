let munstersDescription = "The Munsters are creepy and spooky.";

console.log(
  munstersDescription
    .split("")
    .map(char => {
      if (char.match(/[A-Z]/)) {
        return char.toLowerCase();
      } else if (char.match(/[a-z]/)) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("")
);
